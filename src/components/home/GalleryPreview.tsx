import Image from "next/image";
import Link from "next/link";
import { studioPhotos, streetPhotos } from "@/data/photos";
import SectionLabel from "@/components/ui/SectionLabel";

const categories = [
  {
    id: "studio",
    label: "スタジオ",
    sublabel: "Studio Work",
    href: "/gallery",
    photo: studioPhotos[0],
  },
  {
    id: "street",
    label: "街撮り",
    sublabel: "Street Work",
    href: "/gallery",
    photo: streetPhotos[0],
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <SectionLabel>Works</SectionLabel>
        <Link
          href="/gallery"
          className="text-[12px] tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors uppercase"
        >
          すべて見る →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <Link key={cat.id} href={cat.href} className="group relative overflow-hidden block aspect-[3/4] md:aspect-[4/5]">
            <Image
              src={cat.photo.src}
              alt={cat.photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/70" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <SectionLabel className="text-white/60 mb-2 block">{cat.sublabel}</SectionLabel>
              <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl md:text-3xl">
                {cat.label}
              </h3>
              <span className="inline-flex items-center gap-2 mt-3 text-[var(--accent)] text-[12px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Work →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
