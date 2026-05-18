"use client";

import Image from "next/image";
import type { Photo } from "@/lib/types";

interface PhotoCardProps {
  photo: Photo;
  index: number;
  onClick: (index: number) => void;
}

export default function PhotoCard({ photo, index, onClick }: PhotoCardProps) {
  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      onClick={() => onClick(index)}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={index < 4 ? "eager" : "lazy"}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-[var(--bg-dark)]/0 group-hover:bg-[var(--bg-dark)]/30 transition-all duration-500 flex items-end p-4">
        <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {photo.location && (
            <p className="text-white/80 text-[11px] tracking-[0.15em] uppercase">
              {photo.location}
            </p>
          )}
          {photo.year && (
            <p className="text-white/50 text-[11px] tracking-wider font-[family-name:var(--font-display)]">
              {photo.year}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
