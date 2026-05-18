import InquiryForm from "@/components/contact/InquiryForm";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Mako Photography",
  description: "撮影依頼・お問い合わせはこちらから",
};

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <FadeIn>
          <SectionLabel className="mb-4 block">Contact</SectionLabel>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[var(--text)] mb-4">
            お問い合わせ
          </h1>
          <p className="text-[var(--text-muted)] text-sm leading-loose tracking-wide mb-12">
            撮影のご依頼やご質問など、お気軽にご連絡ください。
            <br />
            3営業日以内にご返信いたします。
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <InquiryForm />
        </FadeIn>
      </div>
    </div>
  );
}
