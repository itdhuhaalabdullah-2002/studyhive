import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { plans } from "../data/content";
import { fadeUp, stagger } from "../lib/animations";

type Billing = "monthly" | "yearly";

const options: { value: Billing; label: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-4 bg-night py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1206px] px-[30px] md:px-6">
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title="Simple plans for every study group"
          description="Start free and upgrade when your group needs more."
        />

        <div className="mt-10 text-center">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex rounded-full border border-white/10 bg-night-deep p-1"
          >
            {options.map((option) => {
              const active = billing === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setBilling(option.value)}
                  className="relative rounded-full px-5 py-2 text-sm font-medium"
                >
                  {active && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-brand"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative">{option.label}</span>
                  {option.value === "yearly" && (
                    <span
                      className={`relative ml-2 text-xs ${
                        active ? "text-white" : "text-[#b9f5cf]"
                      }`}
                    >
                      Save 25%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;
            const note =
              price === 0
                ? "Free forever"
                : billing === "yearly"
                  ? "Billed yearly"
                  : "Billed monthly";

            return (
              <motion.li
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col rounded-lg border bg-night-deep p-6 md:p-8 ${
                  plan.highlighted
                    ? "border-brand shadow-lg shadow-brand/20"
                    : "border-white/10"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-medium">
                    Most popular
                  </span>
                )}

                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-white/75">{plan.description}</p>

                <p className="mt-6 flex h-12 items-baseline gap-1">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={`${plan.name}-${billing}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="text-5xl font-bold"
                    >
                      ${price}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-white/70">/ month</span>
                </p>
                <p className="mt-1 text-sm text-white/70">{note}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 size-5 shrink-0 text-[#a9acff]"
                        aria-hidden="true"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/85">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#early-access"
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="mt-8 h-11 w-full"
                >
                  {plan.cta}
                </Button>
              </motion.li>
            );
          })}
        </motion.ul>

        <p className="mt-8 text-center text-sm text-white/60">
          Sample pricing for a fictional product.
        </p>
      </div>
    </section>
  );
}
