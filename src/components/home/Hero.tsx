import Image from "next/image";
import Link from "next/link";
import { heroPhoto } from "@/data/photos";

export default function Hero() {
  return (
    <section>
      {/* Mobile: image + text below */}
      <div className="md:hidden">
        <div className="relative w-full aspect-[2000/903] overflow-hidden">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="bg-[var(--bg-dark)] px-6 py-10">
          <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase mb-3">
            Photographer
          </p>
          <h1
            className="font-[family-name:var(--font-display)] text-white font-light leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 12vw, 5rem)" }}
          >
            Mako
          </h1>
          <p className="text-white/60 text-sm tracking-[0.1em] mb-8 font-light">
            理想の私を叶えるカメラマン
            <br />
            ビジュアルブランディング ／ プロフィール撮影
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 text-white border border-white/40 px-6 py-3 text-[11px] tracking-[0.2em] uppercase"
          >
            作品を見る
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>
      </div>

      {/* Desktop: full-screen overlay */}
      <div className="hidden md:block relative h-screen min-h-[600px] overflow-hidden">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-14">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase mb-4">
              Photographer
            </p>
            <h1
              className="font-[family-name:var(--font-display)] text-white font-light leading-none mb-6"
              style={{ fontSize: "clamp(4rem, 10vw, 10rem)" }}
            >
              Mako
            </h1>
            <p className="text-white/70 text-base tracking-[0.1em] mb-10 max-w-md font-light">
              理想の私を叶えるカメラマン
              <br />
              ビジュアルブランディング ／ プロフィール撮影
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 text-white border border-white/40 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 px-8 py-3 text-[12px] tracking-[0.2em] uppercase"
            >
              作品を見る
              <span className="text-lg leading-none">→</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 right-14 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.2em] uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
          <span className="w-px h-12 bg-white/30" />
        </div>
      </div>
    </section>
  );
}
