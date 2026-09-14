import { Blinds, Lightbulb, Radio, type LucideIcon } from "lucide-react";

export type ProductCategory = {
  Icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  gradient: string;
};

export const products: ProductCategory[] = [
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
