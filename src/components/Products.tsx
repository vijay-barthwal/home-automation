"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { products } from "@/lib/products";
import SectionHeading from "./SectionHeading";

export default function Products() {
  return (
    <section id="products" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we install"
          title="Three protocols. One effortless home."
          description="Every product we install is chosen for reliability first — then unified so your family only ever has to think about one app."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="card-hover group relative overflow-hidden rounded-3xl border border-border bg-surface p-7"
            >
              <div
                className={`absolute inset-0 -z-0 bg-gradient-to-br ${p.gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 text-brand">
                  <p.Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

                <ul className="mt-6 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
