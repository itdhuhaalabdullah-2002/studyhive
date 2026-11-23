import { motion } from "motion/react";
import Button from "./ui/Button";
import { fadeUp } from "../lib/animations";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-title"
      className="bg-night px-6 pb-20 md:pb-28"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-[1206px] rounded-2xl bg-linear-to-br from-brand to-[#3b3f9e] px-6 py-14 text-center md:py-20"
      >
        <h2
          id="cta-title"
          className="mx-auto max-w-[560px] text-balance text-3xl font-bold leading-[1.3] md:text-4xl"
        >
          Ready to study smarter, together?
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-base leading-relaxed text-white/90 md:text-lg">
          Join the waitlist and be the first to start your Hive when StudyHive
          opens.
        </p>
        <Button href="#early-access" variant="light" className="mt-8 h-12 px-8">
          Get Early Access
        </Button>
      </motion.div>
    </section>
  );
}
