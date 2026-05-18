import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mako.y_photo",
  },
  {
    label: "X",
    href: "https://x.com/jam_ko2021",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=zr4i7ColEs4",
  },
  {
    label: "Blog",
    href: "https://ameblo.jp/mako-beautyphoto/",
  },
  {
    label: "LINE",
    href: "https://lin.ee/u1nfUaZ",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] text-[var(--text-muted)] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10 pb-10 border-b border-white/10">
          <div>
            <span className="font-[family-name:var(--font-display)] text-white text-2xl tracking-widest block mb-2">
              Mako
            </span>
            <p className="text-[11px] tracking-[0.15em] text-white/30">
              理想の私を叶えるカメラマン
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-[12px] tracking-[0.15em]">
            <Link href="/gallery" className="hover:text-[var(--accent)] transition-colors uppercase">
              作品集
            </Link>
            <Link href="/about" className="hover:text-[var(--accent)] transition-colors uppercase">
              About
            </Link>
            <Link href="/contact" className="hover:text-[var(--accent)] transition-colors uppercase">
              お問い合わせ
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.15em] uppercase hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-[11px] tracking-wider text-center md:text-left">
          © {new Date().getFullYear()} Mako Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
