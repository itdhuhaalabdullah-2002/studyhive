import { motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";
import { testimonials } from "../data/content";
import { fadeUp, stagger } from "../lib/animations";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="scroll-mt-4 bg-night-deep py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1206px] px-[30px] md:px-6">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Testimonials"
          title="Students who study better together"
          description="Here is what early users say about studying with their Hive."
        />

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.li
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-white/10 bg-night p-6"
            >
              <figure className="flex h-full flex-col">
                <blockquote className="flex-1 leading-relaxed text-white/85">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-11 items-center justify-center rounded-full bg-brand/30 font-semibold"
                  >
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold">{item.name}</span>
                    <span className="block text-sm text-white/70">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-8 text-center text-sm text-white/60">
          Sample testimonials written for a fictional product.
        </p>
      </div>
    </section>
  );
}
