"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce, EASE } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

const gallery = [
  {
    src: "/product-gallery/zwave-scene-dial-outlet-panel.webp",
    title: "Z-Wave Scene Dial + Smart Outlet",
    description: "Multi-scene dimmer dial paired with a smart universal outlet.",
  },
  {
    src: "/product-gallery/zigbee-touch-switch-panel.webp",
    title: "Zigbee Touch Switch Panel",
    description: "Brushed-steel touch panel for lights, power, and fan control.",
  },
  {
    src: "/product-gallery/smart-scene-dial-switch-panel.webp",
    title: "Scene Dial + Touch Switches",
    description: "A combined dimmer dial and multi-function touch panel.",
  },
  {
    src: "/product-gallery/scene-mode-switch-panel.webp",
    title: "Custom Scene Labels",
    description: "Program named scenes like Visitor, Eating, and Sleep mode.",
  },
  {
    src: "/product-gallery/smart-control-panel-alexa.webp",
    title: "In-Wall Control Hub (Alexa Built-in)",
    description: "A full room dashboard with Alexa built directly into the panel.",
  },
  {
    src: "/product-gallery/smart-home-dashboard-panel.webp",
    title: "Smart Home Dashboard",
    description: "Control curtains, lighting, and climate from one wall-mounted screen.",
  },
  {
    src: "/product-gallery/switch-panel-finish-collection.webp",
    title: "Available Finishes",
    description: "Every panel ships in silver, gold, graphite, and matte black.",
  },
  {
    src: "/product-gallery/touch-switch-panel-finishes.webp",
    title: "Touch Switch Collection",
    description: "The same panel in four premium finishes to match any interior.",
  },
  {
    src: "/product-gallery/dimmer-scene-dial-panel.webp",
    title: "Dimmer & CCT Scene Dial",
    description: "Fine-tune brightness and color temperature with a single dial.",
  },
];

export default function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex === null ? null : gallery[activeIndex];

  return (
    <section id="gallery" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Real hardware"
          title="Panels we actually install."
          description="A closer look at the Z-Wave and Zigbee touch panels, scene dials, and control hubs behind our installations."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5"
        >
          {gallery.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              variants={fadeUp}
              onClick={() => setActiveIndex(i)}
              className="dark card-hover group relative aspect-square overflow-hidden rounded-2xl border border-border-strong bg-surface-2 text-left"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium text-white">{item.title}</p>
              </div>
              <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn size={14} />
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:right-6 sm:top-6"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:left-6"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:right-6"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full max-w-3xl flex-col items-center"
            >
              <div className="relative h-[50vh] w-[90vw] max-w-2xl sm:h-[60vh]">
                <Image
                  src={active.src}
                  alt={active.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-4 max-w-md text-center">
                <p className="text-sm font-semibold text-white">{active.title}</p>
                <p className="mt-1 text-xs text-white/60">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
