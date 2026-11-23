import { motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";
import { steps } from "../data/content";
import { fadeUp, stagger } from "../lib/animations";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="scroll-mt-4 bg-night-deep py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1206px] px-[30px] md:px-6">
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title="From first session to exam day in three steps"
          description="Getting started takes a minute. No setup, no learning curve."
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className="rounded-lg border border-white/10 bg-night p-6"
            >
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-full bg-brand text-lg font-semibold"
              >
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
