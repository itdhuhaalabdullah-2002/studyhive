import { motion } from "motion/react";
import EmailForm from "./ui/EmailForm";
import { fadeUp, stagger } from "../lib/animations";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[780px] items-end overflow-hidden bg-night pb-[88px] pt-40 md:min-h-[800px] md:items-center md:pb-0 md:pt-[6px]">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`${import.meta.env.BASE_URL}images/hero-mobile.webp`}
          type="image/webp"
        />
        <img
          src={`${import.meta.env.BASE_URL}images/hero.webp`}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center md:object-[70%_center]"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-night via-night/80 to-night/20 md:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-linear-to-r from-night from-27% to-transparent to-60% md:block" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-[1206px] px-[30px] md:px-6"
      >
        <motion.h1
          variants={fadeUp}
          className="max-w-[480px] text-balance text-[34px] font-semibold leading-[42px] md:text-[50px] md:leading-[64px]"
        >
          Study together, wherever you are
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-[420px] text-base leading-[25px] text-white/90 md:text-lg md:leading-7"
        >
          All-in-one place for your study group to chat, share notes and track
          progress together.
        </motion.p>

        <motion.div variants={fadeUp} id="early-access" className="mt-14">
          <EmailForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
