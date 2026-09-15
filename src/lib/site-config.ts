// Update NEXT_PUBLIC_SITE_URL in .env.local once the production domain is live.
const DEFAULT_SITE_URL = "https://www.infiniteiot.in";

// See the "Images & caching" note in README.md — bump the trailing ?v=N
// ONLY on this file's path when you replace logo-mark.webp with a new file
// of the same name, so browsers fetch the new one instead of the long cache.
export const LOGO_MARK_SRC = "/logo-mark.webp?v=1";

export const siteConfig = {
  name: "Infinite Automation",
  fullName: "Infinite Automation Technology",
  tagline: "Smarter living, seamlessly connected.",
  description:
    "Infinite Automation Technology designs and installs premium Z-Wave, Zigbee, and motorized curtain systems — unified into one simple, secure smart home experience.",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, ""),
  keywords: [
    "home automation",
    "Z-Wave installation",
    "Zigbee smart lighting",
    "motorized curtains",
    "smart curtain motors",
    "smart home installer",
    "home automation company India",
    "smart switches and scene panels",
    "smart home security",
    "Alexa Google Home HomeKit integration",
  ],
  locale: "en_IN",
  phone: "+91 836 019 1536",
  phoneHref: "tel:+918360191536",
  whatsapp: "https://wa.me/918360191536",
  email: "info@InfiniteIot.in",
  address: "Serving the Greater Metro Area & Suburbs",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM",
  // Set these in .env.local (see .env.local.example). Left unset, the
  // corresponding footer icon is simply not rendered — see Footer.tsx.
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  },
  nav: [
    { label: "Products", href: "#products" },
    { label: "Gallery", href: "#gallery" },
    { label: "Features", href: "#features" },
    { label: "Process", href: "#process" },
    { label: "Showcase", href: "#showcase" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
