import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const details = [
  { label: "場所", value: "東京・六本木周辺" },
  { label: "撮影時間", value: "おひとり 30 分程度" },
  { label: "料金", value: "¥20,000（税込）" },
  { label: "納品", value: "データ 30 カット前後" },
];

const features = [
  "カフェ・グリーンの街角・ラグジュアリーホテルなど多彩なロケーション",
  "ポージングと表情を一緒に確認しながら進むから撮影が苦手な方も安心",
  "衣装・ヘアメイクはご自身でご準備ください",
  "少人数限定制・枠が埋まり次第受付終了",
];

export default function SessionInfo() {
  return (
    <section className="py-20 px-6 md:px-10 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: heading + features */}
          <div>
            <SectionLabel className="mb-4 block">Session</SectionLabel>
            <h2 className="font-[family-name:var(--font-heading)] text-[var(--text)] mb-6"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              撮影会のご案内
            </h2>
            <p className="text-[var(--text-muted)] text-sm leading-loose tracking-wide mb-8">
              「投稿用の写真を更新したい」「自分らしさをプロに引き出してほしい」——
              そんな方のために、少人数限定の屋外プロフィール撮影会を定期開催しています。
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-[var(--text)] leading-relaxed tracking-wide">
                  <span className="text-[var(--accent)] mt-0.5 shrink-0">✦</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: detail table + CTA */}
          <div className="flex flex-col justify-between gap-8">
            <div className="border border-[var(--border)] divide-y divide-[var(--border)]">
              {details.map(({ label, value }) => (
                <div key={label} className="flex items-center px-6 py-4 gap-6">
                  <span className="text-[11px] tracking-[0.2em] text-[var(--text-muted)] uppercase w-20 shrink-0">
                    {label}
                  </span>
                  <span className="text-sm text-[var(--text)] tracking-wide font-[family-name:var(--font-heading)]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPLD9dZTBbO4IkITwh9lLiMqGabNI6Urh28TyJpRanLPuXvw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-4 bg-[var(--text)] text-[var(--bg)] text-[12px] tracking-[0.2em] uppercase hover:bg-[var(--accent)] transition-colors duration-300"
              >
                撮影を申し込む
              </a>
              <a
                href="https://lin.ee/u1nfUaZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-4 border border-[var(--border)] text-[var(--text-muted)] text-[12px] tracking-[0.2em] uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                LINE で無料相談
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
