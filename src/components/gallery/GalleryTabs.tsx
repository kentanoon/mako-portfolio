"use client";

import { useState } from "react";
import { studioPhotos, streetPhotos } from "@/data/photos";
import PhotoGrid from "./PhotoGrid";
import SectionLabel from "@/components/ui/SectionLabel";

type Tab = "studio" | "street";

const tabs: { id: Tab; label: string; sublabel: string }[] = [
  { id: "studio", label: "スタジオ", sublabel: "Studio Work" },
  { id: "street", label: "街撮り", sublabel: "Street Work" },
];

export default function GalleryTabs() {
  const [active, setActive] = useState<Tab>("studio");
  const photos = active === "studio" ? studioPhotos : streetPhotos;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex items-center gap-8 px-4 md:px-8 py-8 border-b border-[var(--border)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex flex-col items-start gap-1 group transition-colors ${
              active === tab.id ? "cursor-default" : "cursor-pointer"
            }`}
          >
            <span
              className={`text-base md:text-lg font-[family-name:var(--font-heading)] transition-colors ${
                active === tab.id
                  ? "text-[var(--text)]"
                  : "text-[var(--text-muted)] group-hover:text-[var(--text)]"
              }`}
            >
              {tab.label}
            </span>
            <span
              className={`h-px transition-all duration-300 ${
                active === tab.id
                  ? "w-full bg-[var(--accent)]"
                  : "w-0 bg-[var(--accent)] group-hover:w-full"
              }`}
              style={{ display: "block" }}
            />
          </button>
        ))}
        <div className="ml-auto">
          <SectionLabel>{photos.length} 点</SectionLabel>
        </div>
      </div>

      {/* Grid */}
      <div className="py-6">
        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
}
