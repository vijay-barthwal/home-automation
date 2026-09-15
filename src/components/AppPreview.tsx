"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Blinds,
  DoorClosed,
  DoorOpen,
  Lightbulb,
  Lock,
  Minus,
  Plus,
  Snowflake,
  Sun,
  Thermometer,
  Unlock,
} from "lucide-react";
import { EASE } from "@/lib/motion";

const tabs = [
  { key: "light", label: "Light", Icon: Lightbulb },
  { key: "ac", label: "AC", Icon: Thermometer },
  { key: "curtain", label: "Curtain", Icon: Blinds },
  { key: "lock", label: "Door Lock", Icon: Lock },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const panelMeta: Record<TabKey, { title: string; HeaderIcon: typeof Lightbulb }> = {
  light: { title: "Smart Lighting", HeaderIcon: Lightbulb },
  ac: { title: "Climate Control", HeaderIcon: Snowflake },
  curtain: { title: "Curtain Control", HeaderIcon: Blinds },
  lock: { title: "Smart Door Lock", HeaderIcon: Lock },
};

const MIN_TEMP = 16;
const MAX_TEMP = 30;
const DIAL_RADIUS = 50;
const DIAL_CIRCUMFERENCE = 2 * Math.PI * DIAL_RADIUS;
// A near-full-circle path starting at 12 o'clock and sweeping clockwise, so the
// dial doesn't need a CSS/SVG rotation (a rotated element here triggers a
// Chromium scroll-jump bug when the sibling motion value re-renders).
const DIAL_PATH = `M 60 ${60 - DIAL_RADIUS} A ${DIAL_RADIUS} ${DIAL_RADIUS} 0 1 1 ${60 - 0.01} ${60 - DIAL_RADIUS}`;

function ToggleSwitch({
  on,
  onToggle,
  label,
  colorClass = "bg-emerald-400",
}: {
  on: boolean;
  onToggle: () => void;
  label: string;
  colorClass?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={on}
      aria-label={label}
      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${on ? colorClass : "bg-foreground/15"}`}
    >
      <motion.span
        animate={{ left: on ? 18 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow"
      />
    </button>
  );
}

export default function AppPreview() {
  const [tab, setTab] = useState<TabKey>("light");

  const [lightOn, setLightOn] = useState(true);
  const [brightness, setBrightness] = useState(70);

  const [acOn, setAcOn] = useState(true);
  const [temp, setTemp] = useState(24);

  const [curtainOpen, setCurtainOpen] = useState(false);

  const [doorLocked, setDoorLocked] = useState(true);

  const tempPct = Math.min(1, Math.max(0, (temp - MIN_TEMP) / (MAX_TEMP - MIN_TEMP)));
  const dialOffset = DIAL_CIRCUMFERENCE * (1 - tempPct);

  const meta = panelMeta[tab];
  const subtitle =
    tab === "light"
      ? lightOn
        ? `Living Room · ${brightness}% brightness`
        : "Living Room · off"
      : tab === "ac"
        ? acOn
          ? `Cooling to ${temp}°C`
          : "AC off"
        : tab === "curtain"
          ? curtainOpen
            ? "Living Room · curtain open"
            : "Living Room · curtain closed"
          : doorLocked
            ? "Front door locked"
            : "Front door unlocked";

  return (
    <div className="relative mx-auto w-full max-w-sm py-6">
      {/* Floating notifications: fade in once and hold still — no perpetual
          JS animation loop running in the background for the life of the page. */}
      <motion.div
        initial={{ opacity: 0, y: -8, x: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute -left-2 -top-2 z-20 hidden items-center gap-2.5 rounded-2xl glass-strong px-3.5 py-2.5 shadow-lg sm:-left-7 sm:-top-4 sm:flex"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-500">
          <Lightbulb size={14} />
        </span>
        <div className="text-left">
          <p className="text-xs font-semibold">Lights dimmed</p>
          <p className="text-[10px] text-muted">Living Room &middot; just now</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8, x: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute -right-2 -bottom-2 z-20 hidden items-center gap-2.5 rounded-2xl glass-strong px-3.5 py-2.5 shadow-lg sm:-right-6 sm:-bottom-4 sm:flex"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
          <Lock size={14} />
        </span>
        <div className="text-left">
          <p className="text-xs font-semibold">Door locked</p>
          <p className="text-[10px] text-muted">Front door &middot; 09:41 AM</p>
        </div>
      </motion.div>

      {/* App card */}
      <motion.div className="relative z-10 rounded-[2rem] border border-border-strong bg-surface p-5 shadow-2xl sm:p-6">
        <motion.div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-indigo-400 text-[#04121a]">
              <meta.HeaderIcon size={16} />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">{meta.title}</p>
              <p className="text-[11px] text-muted">{subtitle}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Online
          </span>
        </motion.div>

        <div className="mt-4 min-h-[172px]">
          <AnimatePresence mode="wait">
            {tab === "light" && (
              <motion.div
                key="light"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between rounded-lg bg-foreground/5 px-3 py-2.5">
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                        lightOn ? "bg-amber-400/20 text-amber-500" : "bg-foreground/10 text-muted"
                      }`}
                    >
                      <Lightbulb size={14} />
                    </span>
                    <span className="text-xs font-medium text-foreground/90">Living Room</span>
                  </span>
                  <ToggleSwitch
                    on={lightOn}
                    onToggle={() => setLightOn((v) => !v)}
                    label={lightOn ? "Turn off light" : "Turn on light"}
                    colorClass="bg-amber-400"
                  />
                </div>

                <div className="rounded-lg bg-foreground/5 px-3 py-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground/90">Brightness</span>
                    <span className="text-muted">{lightOn ? `${brightness}%` : "Off"}</span>
                  </div>
                  <div className="relative mt-2.5 h-8 overflow-hidden rounded-full bg-foreground/10">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-300 to-amber-500"
                      animate={{ width: `${lightOn ? brightness : 0}%` }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={brightness}
                      disabled={!lightOn}
                      onChange={(e) => setBrightness(Number(e.target.value))}
                      aria-label="Brightness"
                      className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {tab === "ac" && (
              <motion.div
                key="ac"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="flex items-center gap-5 rounded-xl border border-border bg-foreground/5 p-4"
              >
                <div className="relative h-28 w-28 shrink-0">
                  <svg viewBox="0 0 120 120" className="h-full w-full">
                    <path d={DIAL_PATH} strokeWidth={10} fill="none" className="stroke-foreground/10" />
                    <motion.path
                      d={DIAL_PATH}
                      strokeWidth={10}
                      fill="none"
                      strokeLinecap="round"
                      stroke="url(#acGradient)"
                      strokeDasharray={DIAL_CIRCUMFERENCE}
                      initial={false}
                      animate={{ strokeDashoffset: dialOffset }}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    />
                    <defs>
                      <linearGradient id="acGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">{temp}&deg;</span>
                    <span className="text-[10px] text-muted">{acOn ? "Cooling" : "Off"}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2.5">
                  <div className="flex items-center justify-between rounded-lg bg-foreground/5 px-3 py-2">
                    <span className="text-xs font-medium text-foreground/90">Power</span>
                    <ToggleSwitch
                      on={acOn}
                      onToggle={() => setAcOn((v) => !v)}
                      label={acOn ? "Turn off AC" : "Turn on AC"}
                      colorClass="bg-cyan-400"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      disabled={!acOn}
                      onClick={() => setTemp((t) => Math.max(MIN_TEMP, t - 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:text-foreground disabled:opacity-40"
                      aria-label="Decrease temperature"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-[10px] text-muted">{MIN_TEMP}&ndash;{MAX_TEMP}&deg;C</span>
                    <button
                      type="button"
                      disabled={!acOn}
                      onClick={() => setTemp((t) => Math.min(MAX_TEMP, t + 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:text-foreground disabled:opacity-40"
                      aria-label="Increase temperature"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {tab === "curtain" && (
              <motion.div
                key="curtain"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between rounded-lg bg-foreground/5 px-3 py-2.5">
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                        curtainOpen ? "bg-sky-400/20 text-sky-500" : "bg-foreground/10 text-muted"
                      }`}
                    >
                      <Blinds size={14} />
                    </span>
                    <span className="text-xs font-medium text-foreground/90">Living Room Curtain</span>
                  </span>
                  <ToggleSwitch
                    on={curtainOpen}
                    onToggle={() => setCurtainOpen((v) => !v)}
                    label={curtainOpen ? "Close curtain" : "Open curtain"}
                    colorClass="bg-sky-400"
                  />
                </div>

                <div className="relative h-28 overflow-hidden rounded-xl border border-border bg-gradient-to-b from-sky-200/40 via-sky-100/10 to-transparent">
                  <Sun size={28} className="absolute inset-0 m-auto text-amber-400/70" />
                  <motion.div
                    className="absolute inset-y-0 left-0 flex w-1/2 divide-x divide-white/15 overflow-hidden bg-gradient-to-r from-indigo-400 to-indigo-500 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.25)]"
                    animate={{ x: curtainOpen ? "-100%" : "0%" }}
                    transition={{ duration: 0.8, ease: EASE }}
                  >
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span key={i} className="h-full flex-1" />
                    ))}
                  </motion.div>
                  <motion.div
                    className="absolute inset-y-0 right-0 flex w-1/2 divide-x divide-white/15 overflow-hidden bg-gradient-to-l from-indigo-400 to-indigo-500 shadow-[-4px_0_10px_-4px_rgba(0,0,0,0.25)]"
                    animate={{ x: curtainOpen ? "100%" : "0%" }}
                    transition={{ duration: 0.8, ease: EASE }}
                  >
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span key={i} className="h-full flex-1" />
                    ))}
                  </motion.div>
                </div>
                <p className="text-center text-[11px] text-muted">
                  {curtainOpen ? "Curtain open" : "Curtain closed"}
                </p>
              </motion.div>
            )}

            {tab === "lock" && (
              <motion.div
                key="lock"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="rounded-xl border border-border bg-foreground/5 p-4"
              >
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setDoorLocked((v) => !v)}
                    aria-pressed={doorLocked}
                    aria-label={doorLocked ? "Unlock door" : "Lock door"}
                    className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white bg-gradient-to-br ${
                      doorLocked ? "from-emerald-400 to-teal-500" : "from-amber-400 to-orange-500"
                    }`}
                  >
                    {doorLocked ? <DoorClosed size={26} /> : <DoorOpen size={26} />}
                  </button>
                  <div>
                    <p className="text-sm font-semibold">Front Door: {doorLocked ? "Locked" : "Unlocked"}</p>
                    <p className="mt-0.5 text-[11px] text-muted">Tap the door icon to {doorLocked ? "unlock" : "lock"}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between rounded-lg bg-foreground/5 px-3 py-2">
                  <span className="flex items-center gap-2 text-xs text-foreground/90">
                    {doorLocked ? <Lock size={12} className="text-brand" /> : <Unlock size={12} className="text-amber-500" />}
                    Front Door
                  </span>
                  <span className={`text-[10px] font-medium ${doorLocked ? "text-emerald-500" : "text-amber-500"}`}>
                    {doorLocked ? "Locked" : "Unlocked"}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div className="mt-4 grid grid-cols-2 gap-2">
          {tabs.map((t) => {
            const isActive = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full px-3 py-2 text-[11px] font-medium transition-colors ${
                  isActive ? "text-[#04121a]" : "border border-border text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="chip-active-bg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400"
                    transition={{ type: "spring", stiffness: 500, damping: 32 }}
                  />
                )}
                <span className="relative inline-flex items-center gap-1.5">
                  <t.Icon size={13} /> {t.label}
                </span>
              </button>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
