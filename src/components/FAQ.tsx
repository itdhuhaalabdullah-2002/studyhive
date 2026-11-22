import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";
import { faqs } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-4 bg-night py-20 md:py-28"
    >
      <div className="mx-auto max-w-[768px] px-6">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Can’t find what you need? Add your email above and we’ll get in touch."
        />

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-medium"
                  >
                    {faq.question}
                    <motion.svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="size-6 shrink-0 text-[#a9acff]"
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </motion.svg>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 leading-relaxed text-white/80">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
