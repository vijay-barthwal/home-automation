"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Blinds, Camera, Lightbulb, Lock, Thermometer, Waves } from "lucide-react";

const satellites = [
  { Icon: Lock, angle: -100, delay: 0, label: "Smart Lock" },
  { Icon: Lightbulb, angle: -30, delay: 0.4, label: "Zigbee Light" },
  { Icon: Blinds, angle: 40, delay: 0.8, label: "Curtain Motor" },
  { Icon: Thermometer, angle: 110, delay: 1.2, label: "Climate" },
  { Icon: Camera, angle: 180, delay: 1.6, label: "Security Cam" },
];

function pointOnCircle(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

const SM_QUERY = "(min-width: 640px)";

function subscribeToSmBreakpoint(callback: () => void) {
  const mq = window.matchMedia(SM_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getIsSmUp() {
  return window.matchMedia(SM_QUERY).matches;
}

function getIsSmUpServerSnapshot() {
  return false;
}

export default function DeviceNetwork() {
  const isSmUp = useSyncExternalStore(subscribeToSmBreakpoint, getIsSmUp, getIsSmUpServerSnapshot);
  const radius = isSmUp ? 175 : 130;

  return (
    <div
      className="relative mx-auto flex h-[330px] w-[330px] items-center justify-center sm:h-[420px] sm:w-[420px]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute h-full w-full rounded-full border border-cyan-400/20"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute h-[78%] w-[78%] rounded-full border border-dashed border-border-strong" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="-210 -210 420 420"
        style={{ overflow: "visible" }}
      >
        {satellites.map(({ angle }, i) => {
          const p = pointOnCircle(angle, radius);
          return (
            <motion.line
              key={i}
              x1={0}
              y1={0}
              x2={p.x}
              y2={p.y}
              stroke="url(#lineGradient)"
              strokeWidth={1.5}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-cyan-400 to-indigo-400 shadow-[0_0_50px_-5px_rgba(34,211,238,0.65)] sm:h-28 sm:w-28"
      >
        <Waves size={40} className="text-[#04121a]" strokeWidth={2.2} />
        <motion.span
          className="absolute inset-0 rounded-2xl border-2 border-cyan-300/60"
          animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Satellite nodes */}
      {satellites.map(({ Icon, angle, delay }, i) => {
        const p = pointOnCircle(angle, radius);
        return (
          <motion.div
            key={i}
            className="absolute z-10"
            style={{ left: "50%", top: "50%" }}
            initial={{ opacity: 0, x: p.x, y: p.y - 16 }}
            animate={{
              opacity: 1,
              x: p.x,
              y: [p.y - 6, p.y + 6, p.y - 6],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.5 + i * 0.15 },
              y: { duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay },
            }}
          >
            <div className="flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl glass-strong text-brand shadow-lg">
              <Icon size={28} strokeWidth={2} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
