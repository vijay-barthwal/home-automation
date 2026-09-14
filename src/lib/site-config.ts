// Update NEXT_PUBLIC_SITE_URL in .env.local once the production domain is live.
const DEFAULT_SITE_URL = "https://www.infiniteiot.in";

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
  email: "info@InfiniteIot.in",
  address: "Serving the Greater Metro Area & Suburbs",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
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
