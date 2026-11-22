import Logo from "./Logo";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-deep">
      <div className="mx-auto max-w-[1152px] px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-[320px]">
            <Logo />
            <p className="mt-4 leading-relaxed text-white/75">
              The study workspace for groups. Chat, share notes and track
              progress together.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#a9acff]">
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/65 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>
          <p>A fictional product built for a frontend internship project.</p>
        </div>
      </div>
    </footer>
  );
}
