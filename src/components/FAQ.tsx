"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EASE, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { faqs } from "@/lib/faq";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py relative">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading eyebrow="Common questions" title="Frequently asked questions" />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 space-y-3"
        >
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-medium sm:text-base">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-brand"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
