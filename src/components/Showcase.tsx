"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Blinds,
  Camera,
  Fan,
  Lightbulb,
  Lock,
  type LucideIcon,
  Sofa,
  Thermometer,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import { EASE } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

type Room = {
  key: string;
  label: string;
  RoomIcon: LucideIcon;
  gradient: string;
  automations: { Icon: LucideIcon; text: string }[];
};

const rooms: Room[] = [
  {
    key: "living",
    label: "Living Room",
    RoomIcon: Sofa,
    gradient: "from-cyan-400/25 via-cyan-400/5 to-transparent",
    automations: [
      { Icon: Lightbulb, text: "Zigbee lighting scenes for movie night & everyday" },
      { Icon: Blinds, text: "Curtains close automatically at sunset" },
      { Icon: Waves, text: "Voice control via Alexa & Google Assistant" },
      { Icon: Thermometer, text: "Climate synced to occupancy sensors" },
    ],
  },
  {
    key: "bedroom",
    label: "Bedroom",
    RoomIcon: Fan,
    gradient: "from-indigo-400/25 via-indigo-400/5 to-transparent",
    automations: [
      { Icon: Blinds, text: "Blinds rise gently with your morning alarm" },
      { Icon: Lightbulb, text: "Warm, dimmable scenes for night reading" },
      { Icon: Lock, text: "Door sensor confirms the house is secure" },
      { Icon: Fan, text: "Fan & climate scheduled for better sleep" },
    ],
  },
  {
    key: "kitchen",
    label: "Kitchen",
    RoomIcon: UtensilsCrossed,
    gradient: "from-violet-400/25 via-violet-400/5 to-transparent",
    automations: [
      { Icon: Lightbulb, text: "Bright task lighting on motion detection" },
      { Icon: Waves, text: "Water leak sensors under sinks & appliances" },
      { Icon: Thermometer, text: "Smoke & heat alerts sent to your phone" },
      { Icon: Lock, text: "Smart lock auto-locks the back door" },
    ],
  },
  {
    key: "office",
    label: "Home Office",
    RoomIcon: Camera,
    gradient: "from-cyan-300/25 via-indigo-300/10 to-transparent",
    automations: [
      { Icon: Blinds, text: "Glare-reducing blinds adjust with the sun" },
      { Icon: Lightbulb, text: "Focus lighting scene for video calls" },
      { Icon: Camera, text: "Security camera arms when you step away" },
      { Icon: Waves, text: "One tap 'End of day' shutdown scene" },
    ],
  },
];

export default function Showcase() {
  const [active, setActive] = useState(rooms[0].key);
  const room = rooms.find((r) => r.key === active)!;

  return (
    <section id="showcase" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="See it in action"
          title="Automation tailored to every room."
          description="Tap a room to see the kind of automation we typically design for it."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {rooms.map((r) => (
            <button
              key={r.key}
              onClick={() => setActive(r.key)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                active === r.key
                  ? "bg-gradient-to-r from-cyan-300 to-indigo-400 text-[#04121a]"
                  : "border border-border text-muted hover:text-foreground"
              }`}
            >
              <r.RoomIcon size={16} />
              {r.label}
            </button>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-10">
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${room.gradient}`} />
          <AnimatePresence mode="wait">
            <motion.div
              key={room.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
            >
              <div className="order-2 flex justify-center lg:order-1">
                <div className="dark flex h-40 w-40 items-center justify-center rounded-[2rem] glass-strong sm:h-56 sm:w-56">
                  <room.RoomIcon size={64} className="text-brand" strokeWidth={1.5} />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-semibold">{room.label}</h3>
                <ul className="mt-6 space-y-4">
                  {room.automations.map((a, i) => (
                    <motion.li
                      key={a.text}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: EASE }}
                      className="flex items-start gap-3 rounded-xl bg-foreground/5 p-3.5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/15 text-brand">
                        <a.Icon size={16} />
                      </span>
                      <span className="pt-1.5 text-sm text-foreground/90">{a.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
