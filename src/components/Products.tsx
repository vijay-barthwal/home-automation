"use client";

import { motion } from "framer-motion";
import { Blinds, Check, Lightbulb, Radio } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const products = [
  {
    Icon: Radio,
    title: "Z-Wave Automation",
    tagline: "Rock-solid, interference-free control.",
    description:
      "A dedicated mesh network for the devices that matter most — locks, sensors, and security — engineered to stay reliable through thick walls and busy Wi-Fi.",
    bullets: [
      "Smart locks & door/window sensors",
      "Water leak & smoke detection",
      "Mesh network up to 232 devices",
      "Encrypted S2 security by default",
    ],
    gradient: "from-cyan-400/20 to-cyan-400/0",
  },
  {
    Icon: Lightbulb,
    title: "Zigbee Lighting & Sensors",
    tagline: "Low-power mesh that just works.",
    description:
      "Fast, efficient networking purpose-built for lighting, switches, and sensors — instant response, day one and every day after.",
    bullets: [
      "Adaptive smart lighting & switches",
      "Motion & presence sensors",
      "Works with Alexa, Google & HomeKit",
      "Instant scenes, schedules & automations",
    ],
    gradient: "from-indigo-400/20 to-indigo-400/0",
  },
  {
    Icon: Blinds,
    title: "Motorized Curtains & Blinds",
    tagline: "Whisper-quiet, on your schedule.",
    description:
      "Silent motors that open your day and close it — by app, by voice, by remote, or automatically with the sun.",
    bullets: [
      "Silent battery or hardwired motors",
      "Solar & light-sensing automation",
      "Retrofits onto most existing tracks",
      "App, remote & voice control included",
    ],
    gradient: "from-violet-400/20 to-violet-400/0",
  },
];

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
