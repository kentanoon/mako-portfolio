import Image from "next/image";
import { awards } from "@/data/awards";
import AwardsBadge from "@/components/about/AwardsBadge";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mako Photography",
  description: "写真家 Mako のプロフィール。写真歴18年、女性起業家専門カメラマン。",
};

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Portrait */}
          <FadeIn direction="none">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/photos/profile.jpg"
                alt="写真家 Mako"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>

          {/* Profile text */}
          <FadeIn delay={0.15}>
            <div className="md:pt-8">
              <SectionLabel className="mb-4 block">Photographer</SectionLabel>
              <h1
                className="font-[family-name:var(--font-display)] text-[var(--text)] font-light mb-2 leading-none"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
              >
                Mako
              </h1>
              <p className="text-[var(--text-muted)] text-sm tracking-[0.15em] mb-2">
                理想の私を叶えるカメラマン
              </p>
              <p className="text-[var(--accent)] text-[11px] tracking-[0.2em] uppercase mb-2">
                ✦ 40s TOP OF AWARD 2025 KANTO 受賞
              </p>
              <p className="text-[var(--text-muted)] text-[11px] tracking-[0.15em] mb-8">
                活動拠点：東京（六本木周辺）
              </p>

              <div className="space-y-5 text-[var(--text)] text-sm md:text-base leading-loose tracking-wide mb-12">
                <p>
                  写真歴18年。スタジオカメラマンとしてのキャリアを経て、
                  現在はビジュアルブランディングカメラマンとして、
                  女性起業家のプロフィール撮影を専門としています。
                </p>
                <p>
                  「何を着て、どこで、どう写るか」——
                  衣装・ロケーション・ポージングまでトータルに設計し、
                  あなただけの"本当の魅力"を写真に刻みます。
                  撮影が苦手な方も、一緒に理想のイメージを作り上げていきましょう。
                </p>
                <p>
                  スタジオの緻密な光から、東京の街角に輝く自然光まで。
                  どんな場でも、被写体の方と真摯に向き合い、
                  「こんな自分がいたんだ」と感じていただける一枚をお届けします。
                </p>
              </div>

              {/* SNS links */}
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="https://www.instagram.com/mako.y_photo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors border border-[var(--border)] px-4 py-2"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com/jam_ko2021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors border border-[var(--border)] px-4 py-2"
                >
                  X
                </a>
                <a
                  href="https://ameblo.jp/mako-beautyphoto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors border border-[var(--border)] px-4 py-2"
                >
                  Blog
                </a>
                <a
                  href="https://www.youtube.com/watch?v=zr4i7ColEs4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors border border-[var(--border)] px-4 py-2"
                >
                  YouTube
                </a>
                <a
                  href="https://lin.ee/u1nfUaZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors border border-[var(--border)] px-4 py-2"
                >
                  LINE 無料相談
                </a>
              </div>

              {/* Awards */}
              <div>
                <SectionLabel className="mb-6 block">Awards &amp; Recognition</SectionLabel>
                <div>
                  {awards.map((award) => (
                    <AwardsBadge key={award.id} award={award} />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
