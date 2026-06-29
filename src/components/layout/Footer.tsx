import { Logo } from "@/components/ui/NavLink";

const footerLinks = [
  { href: "/archive", label: "Archive" },
  { href: "/#yarns", label: "Yarns" },
  { href: "/#collections", label: "Collections" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="space-y-4">
          <div className="[&_span]:text-white [&_span]:tracking-[0.35em]">
            <Logo />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            A digital archive for organizing, consulting, and celebrating every
            knit swatch.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-opacity duration-300 hover:text-white hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} demalamutria. All rights reserved.</p>
          <p>hello@demalamutria.com</p>
        </div>
      </div>
    </footer>
  );
}
