// See the "Images & caching" note in README.md — when you replace one of
// these files with a new file of the SAME name, bump only that image's
// trailing ?v=N so browsers fetch the new one instead of the long cache.
// A brand-new filename doesn't need a ?v= at all.
export const gallery = [
  {
    src: "/product-gallery/zwave-scene-dial-outlet-panel.webp?v=1",
    title: "Z-Wave Scene Dial + Smart Outlet",
    description: "Multi-scene dimmer dial paired with a smart universal outlet.",
  },
  {
    src: "/product-gallery/zigbee-touch-switch-panel.webp?v=1",
    title: "Zigbee Touch Switch Panel",
    description: "Brushed-steel touch panel for lights, power, and fan control.",
  },
  {
    src: "/product-gallery/smart-scene-dial-switch-panel.webp?v=1",
    title: "Scene Dial + Touch Switches",
    description: "A combined dimmer dial and multi-function touch panel.",
  },
  {
    src: "/product-gallery/scene-mode-switch-panel.webp?v=1",
    title: "Custom Scene Labels",
    description: "Program named scenes like Visitor, Eating, and Sleep mode.",
  },
  {
    src: "/product-gallery/smart-control-panel-alexa.webp?v=1",
    title: "In-Wall Control Hub (Alexa Built-in)",
    description: "A full room dashboard with Alexa built directly into the panel.",
  },
  {
    src: "/product-gallery/smart-home-dashboard-panel.webp?v=1",
    title: "Smart Home Dashboard",
    description: "Control curtains, lighting, and climate from one wall-mounted screen.",
  },
  {
    src: "/product-gallery/switch-panel-finish-collection.webp?v=1",
    title: "Available Finishes",
    description: "Every panel ships in silver, gold, graphite, and matte black.",
  },
  {
    src: "/product-gallery/touch-switch-panel-finishes.webp?v=1",
    title: "Touch Switch Collection",
    description: "The same panel in four premium finishes to match any interior.",
  },
  {
    src: "/product-gallery/dimmer-scene-dial-panel.webp?v=1",
    title: "Dimmer & CCT Scene Dial",
    description: "Fine-tune brightness and color temperature with a single dial.",
  },
] as const;
