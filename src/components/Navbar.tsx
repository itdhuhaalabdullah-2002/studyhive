import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";
import Button from "./ui/Button";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#faq" },
  { label: "Log In", href: "#" },
];

const linkClass =
  "text-[15px] underline underline-offset-4 transition-opacity hover:opacity-75";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1206px] items-center justify-between px-[30px] py-[45px] md:px-6 md:py-[42px]">
        <Logo />

        <nav
          aria-label="Main"
          className="hidden items-center gap-[60px] md:flex"
        >
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <Button
            href="#early-access"
            variant="muted"
            className="h-12 w-[184px] text-[17px]!"
          >
            Get Access
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="-mr-1 -mt-1 self-start rounded-control p-1 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-6"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-full flex flex-col gap-5 rounded-lg bg-night-deep p-6 shadow-2xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#early-access"
              className="h-12 w-full"
              onClick={() => setOpen(false)}
            >
              Get Access
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
