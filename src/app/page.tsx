import Hero from "@/components/home/Hero";
import GalleryPreview from "@/components/home/GalleryPreview";
import SessionInfo from "@/components/home/SessionInfo";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <GalleryPreview />

      <FadeIn>
        <SessionInfo />
      </FadeIn>

      {/* About teaser */}
      <FadeIn>
        <section className="py-20 px-6 md:px-10 bg-[var(--bg-dark)]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--text-muted)] text-[11px] tracking-[0.3em] uppercase mb-6">
              Photographer
            </p>
            <h2
              className="font-[family-name:var(--font-display)] text-white font-light mb-8 leading-snug"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Mako
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-loose tracking-wide max-w-xl mx-auto mb-10">
              写真歴18年。元スタジオカメラマンから、
              ビジュアルブランディングカメラマンへ。
              「何を着て、どこで、どう写るか」まで設計し、
              あなたの"本当の魅力"を引き出します。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-white/60 hover:text-[var(--accent)] transition-colors text-[12px] tracking-[0.2em] uppercase"
            >
              詳しく見る →
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
