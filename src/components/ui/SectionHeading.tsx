import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto max-w-[640px] text-center"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-[#a9acff]">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-balance text-3xl font-bold leading-[1.3] md:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
