import GalleryTabs from "@/components/gallery/GalleryTabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "作品集 | Mako Photography",
  description: "スタジオ・街撮りポートレートの作品集",
};

export default function GalleryPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="px-4 md:px-8 pt-12 pb-4 max-w-7xl mx-auto">
        <p className="text-[11px] tracking-[0.3em] text-[var(--text-muted)] uppercase mb-3">
          Portfolio
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[var(--text)]">
          作品集
        </h1>
      </div>
      <GalleryTabs />
    </div>
  );
}
