"use client";

import { motion } from "framer-motion";
import { Gauge, Headset, Mic, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const features = [
  {
    Icon: Smartphone,
    title: "One unified app",
    description: "Control locks, lights, and curtains from a single, beautifully simple dashboard.",
  },
  {
    Icon: Wrench,
    title: "Design & installation",
    description: "Our technicians plan the mesh, run the wiring, and configure every scene for you.",
  },
  {
    Icon: ShieldCheck,
    title: "Bank-grade security",
    description: "End-to-end encrypted protocols keep your locks, cameras, and data private.",
  },
  {
    Icon: Mic,
    title: "Voice assistant ready",
    description: "Works natively with Alexa, Google Assistant, and Apple HomeKit out of the box.",
  },
  {
    Icon: Gauge,
    title: "Energy-aware automation",
    description: "Smart schedules and sensors trim wasted energy without you lifting a finger.",
  },
  {
    Icon: Headset,
    title: "Local support & warranty",
    description: "Real humans on call, backed by a 5-year installation warranty on every job.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why homeowners choose us"
          title="Built for reliability, designed to feel invisible."
          description="Great automation disappears into daily life. We handle the complexity so you only notice the convenience."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="card-hover rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/10 text-brand">
                <f.Icon size={20} strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
