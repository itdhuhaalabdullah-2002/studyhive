import { motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";
import { features } from "../data/content";
import { fadeUp, stagger } from "../lib/animations";

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="scroll-mt-4 bg-night py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1152px] px-6">
        <SectionHeading
          id="features-title"
          eyebrow="Features"
          title="Everything your study group needs in one place"
          description="Stop juggling chats, documents and calendars. StudyHive brings them together."
        />

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.li
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-white/10 bg-night-deep p-6"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-brand/20 text-[#a9acff]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                  aria-hidden="true"
                >
                  <path d={feature.icon} />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-white/75">
                {feature.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
