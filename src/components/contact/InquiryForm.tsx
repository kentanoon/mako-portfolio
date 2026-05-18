"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  type: z.enum(["portrait", "commercial", "other"]).refine((v) => v !== undefined, {
    message: "お問い合わせの種類を選択してください",
  }),
  message: z.string().min(10, "メッセージは10文字以上入力してください"),
});

type FormData = z.infer<typeof schema>;

const inquiryTypes = [
  { value: "portrait", label: "ポートレート撮影" },
  { value: "commercial", label: "商業撮影" },
  { value: "other", label: "その他" },
];

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border-b border-[var(--border)] bg-transparent py-3 text-[var(--text)] text-sm tracking-wide placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors";

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <p className="font-[family-name:var(--font-heading)] text-[var(--text)] text-xl mb-3">
          送信完了
        </p>
        <p className="text-[var(--text-muted)] text-sm leading-loose">
          お問い合わせありがとうございます。
          <br />
          3営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <input
          {...register("name")}
          type="text"
          placeholder="お名前 *"
          className={inputClass}
        />
        {errors.name && (
          <p className="mt-1 text-[11px] text-red-400 tracking-wide">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="メールアドレス *"
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1 text-[11px] text-red-400 tracking-wide">{errors.email.message}</p>
        )}
      </div>

      <div>
        <select
          {...register("type")}
          className={`${inputClass} cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>
            お問い合わせの種類 *
          </option>
          {inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {errors.type && (
          <p className="mt-1 text-[11px] text-red-400 tracking-wide">{errors.type.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="メッセージ *"
          rows={5}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-[11px] text-red-400 tracking-wide">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-[11px] text-red-400 tracking-wide">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full md:w-auto px-12 py-4 border border-[var(--text)] text-[var(--text)] text-[12px] tracking-[0.2em] uppercase hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
