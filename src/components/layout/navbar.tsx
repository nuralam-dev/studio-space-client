"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Aperture, ArrowUpRight, Menu, X } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Studios", href: "/studios" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="StudioSpace home"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Aperture className="size-6" aria-hidden="true" />
          </span>
          <span className="text-xl font-bold tracking-tight">StudioSpace</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-ring",
                isActiveLink(link.href)
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className={buttonVariants({ variant: "ghost", className: "h-10 px-4" })}>
            Login
          </Link>
          <Link href="/register" className={buttonVariants({ className: "h-10 gap-2 px-4" })}>
            Register
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <Button
          ref={menuButtonRef}
          type="button"
          variant="outline"
          size="icon"
          className="size-11 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeMenu();
          }}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
        className="border-t bg-background px-4 py-4 sm:px-6 lg:hidden"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
            menuButtonRef.current?.focus();
          }
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring",
                isActiveLink(link.href)
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-3 border-t pt-4">
            <Link href="/login" onClick={closeMenu} className={buttonVariants({ variant: "outline", className: "h-11" })}>
              Login
            </Link>
            <Link href="/register" onClick={closeMenu} className={buttonVariants({ className: "h-11 gap-2" })}>
              Register
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
