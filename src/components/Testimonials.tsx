"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "The curtains alone changed how our living room feels — they open with the sunrise every morning. Installation was clean and the app is genuinely easy for the whole family.",
    name: "Priya R.",
    role: "Homeowner, 3-bed retrofit",
  },
  {
    quote:
      "We mixed Z-Wave locks with Zigbee lighting and worried they wouldn't play nice together. Their team unified everything into one app without a single hiccup.",
    name: "Daniel M.",
    role: "Homeowner, new build",
  },
  {
    quote:
      "Professional from the first call. They explained the trade-offs between protocols instead of just upselling gear, and the install crew left zero mess behind.",
    name: "Ayesha K.",
    role: "Homeowner, apartment upgrade",
  },
];

export default function Testimonials() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trusted by homeowners"
          title="Don't just take our word for it."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="card-hover flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <Quote className="text-cyan-400/40" size={28} />
              <div className="mt-3 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
