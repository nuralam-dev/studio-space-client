import Link from "next/link";
import { Aperture, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Studios", href: "/studios" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
];

const categories = [
  "Photo Studio",
  "Film Stage",
  "Podcast Lounge",
  "Music Suite",
  "Workshop",
];

const linkClassName =
  "inline-block rounded-sm py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

interface FooterProps {
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    x?: string;
  };
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="mt-auto border-t bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <Link
              href="/"
              aria-label="StudioSpace home"
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Aperture className="size-6" aria-hidden="true" />
              </span>
              <span className="text-xl font-bold tracking-tight">StudioSpace</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Connecting creators with inspiring spaces for their next shoot,
              recording, or creative project.
            </p>
            {socialLinks && (
              <nav aria-label="Social media" className="mt-4 flex flex-wrap gap-4">
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} className={linkClassName}>Instagram</a>
                )}
                {socialLinks.facebook && (
                  <a href={socialLinks.facebook} className={linkClassName}>Facebook</a>
                )}
                {socialLinks.x && (
                  <a href={socialLinks.x} aria-label="StudioSpace on X" className={linkClassName}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
                    </svg>
                  </a>
                )}
              </nav>
            )}
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-3 text-sm font-semibold">Quick links</h2>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Studio categories">
            <h2 className="mb-3 text-sm font-semibold">Find your space</h2>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category}>
                  <Link href={`/studios?category=${encodeURIComponent(category)}`} className={linkClassName}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="newsletter-heading">
            <h2 id="newsletter-heading" className="text-sm font-semibold">Stay inspired</h2>
            <p id="newsletter-description" className="mt-3 text-sm leading-6 text-muted-foreground">
              Studio news and creative inspiration. Newsletter signup is coming soon.
            </p>
            <label htmlFor="footer-email" className="mt-4 block text-sm font-medium">Email address</label>
            <div className="mt-2 flex flex-wrap gap-2">
              <div className="relative min-w-0 flex-1 basis-40">
                <Mail className="pointer-events-none absolute top-3 left-3 size-4 text-muted-foreground" aria-hidden="true" />
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  disabled
                  aria-describedby="newsletter-description"
                  className="h-10 w-full rounded-lg border border-input bg-background pr-3 pl-9 text-sm disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
              <Button type="button" disabled className="h-10 px-4">Subscribe</Button>
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StudioSpace. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-5">
            <Link href="/terms" className={linkClassName}>Terms of service</Link>
            <Link href="/privacy" className={linkClassName}>Privacy policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
