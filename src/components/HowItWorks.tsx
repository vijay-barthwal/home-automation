"use client";

import { motion } from "framer-motion";
import { ClipboardList, Compass, PlugZap, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    Icon: Compass,
    title: "Free consultation",
    description: "We walk your home (in person or on a call) and understand what you actually want automated.",
  },
  {
    Icon: ClipboardList,
    title: "Custom design",
    description: "We map out devices, hubs, and automations tailored to your rooms, routines, and budget.",
  },
  {
    Icon: PlugZap,
    title: "Expert installation",
    description: "Certified technicians install, wire, and configure everything — cleanly and on schedule.",
  },
  {
    Icon: Sparkles,
    title: "Automate & relax",
    description: "We hand over a fully working smart home and stay on call for support whenever you need us.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our process"
          title="From first call to fully automated."
          description="A clear, four-step process so you always know what happens next."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="pointer-events-none absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block" />

          {steps.map((s) => (
            <motion.div key={s.title} variants={fadeUp} className="relative text-center lg:text-left">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl glass-strong text-brand lg:mx-0">
                <s.Icon size={24} strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
