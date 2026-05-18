import type { Award } from "@/lib/types";

interface AwardsBadgeProps {
  award: Award;
}

export default function AwardsBadge({ award }: AwardsBadgeProps) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-[var(--border)] last:border-0">
      <span className="font-[family-name:var(--font-display)] text-[var(--accent)] text-3xl font-light leading-none mt-1">
        {award.year}
      </span>
      <div>
        <p className="font-[family-name:var(--font-heading)] text-[var(--text)] text-base">
          {award.title}
        </p>
        <p className="text-[var(--text-muted)] text-sm tracking-wide mt-1">
          {award.event}
        </p>
      </div>
    </div>
  );
}
