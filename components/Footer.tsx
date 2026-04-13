import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "@/components/Container";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Our Work" },
    { href: "/careers", label: "Careers / Internship" },
    { href: "/iso-certificate", label: "ISO Certificate" },
    { href: "/contact", label: "Contact" }
  ],
  Services: [
    { href: "/services", label: "Software Engineering" },
    { href: "/services", label: "Robotics & Hardware" },
    { href: "/services", label: "Automation Systems" }
  ],
  Connect: [
    { href: "mailto:team@huromata.com", label: "team@huromata.com" },
    { href: "https://wa.me/9944290013", label: "WhatsApp Us" }
  ]
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 pt-16 pb-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Product engineering for SaaS platforms, automation systems, and robotics solutions.
              Built to scale from day one.
            </p>
            <div className="mt-6 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
              <span className="text-xs font-medium text-zinc-500">Available for new projects</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-black">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-black"
                      {...(link.href.startsWith("http") && {
                        target: "_blank",
                        rel: "noopener noreferrer"
                      })}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-400">
            &copy; {year} Huromata. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400">
            Engineered for performance. Built to last.
          </p>
        </div>
      </Container>
    </footer>
  );
}
