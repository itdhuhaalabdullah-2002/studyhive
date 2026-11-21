import { motion } from "motion/react";
import EmailForm from "./ui/EmailForm";
import { fadeUp, stagger } from "../lib/animations";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-night pb-14 pt-40 md:min-h-[800px] md:items-center md:pb-0 md:pt-0">
      <motion.img
        src={`${import.meta.env.BASE_URL}images/hero.jpg`}
        alt=""
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-night via-night/80 to-night/20 md:bg-linear-to-r md:from-night md:via-night/70 md:to-night/10" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-[1152px] px-6"
      >
        <motion.h1
          variants={fadeUp}
          className="max-w-[480px] text-balance text-[32px] font-bold leading-[1.3] md:text-5xl"
        >
          Study together, wherever you are
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[420px] text-base leading-relaxed text-white/90 md:text-lg"
        >
          All-in-one place for your study group to chat, share notes and track
          progress together.
        </motion.p>

        <motion.div variants={fadeUp} id="early-access" className="mt-10">
          <EmailForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
