export const faqs = [
  {
    q: "What's the difference between Z-Wave and Zigbee — which do I need?",
    a: "Both are reliable, low-power mesh protocols. We typically use Z-Wave for security-critical devices like locks and sensors thanks to its longer range and dedicated frequency, and Zigbee for lighting and switches where its larger device ecosystem shines. Most homes end up with a mix of both, unified in one app.",
  },
  {
    q: "Can I retrofit curtain motors onto my existing curtains or blinds?",
    a: "In most cases, yes. Our motors are designed to fit onto standard tracks and rods with minimal modification. During your free consultation we'll confirm compatibility and recommend a battery or hardwired motor based on your window setup.",
  },
  {
    q: "Do I need a separate hub, or can devices connect directly to my phone?",
    a: "Z-Wave and Zigbee devices need a hub to communicate — we include and configure this as part of installation. The hub talks to your devices locally and syncs to your phone through one app, so control still works even if your internet briefly drops.",
  },
  {
    q: "Is my smart home data secure?",
    a: "Yes. Z-Wave uses S2 encryption by default, and Zigbee traffic is encrypted at the network level. We also follow best practices like unique credentials per install and keeping hub firmware up to date.",
  },
  {
    q: "Does it work with Alexa, Google Assistant, or Apple HomeKit?",
    a: "Yes — every system we install is configured to work with all three out of the box, so you can use whichever voice assistant your household already prefers.",
  },
  {
    q: "What happens if my Wi-Fi or internet goes down?",
    a: "Local automations (schedules, sensor-triggered scenes, physical switches) keep working because Z-Wave and Zigbee run on their own local mesh. Only remote/away access and voice assistants require internet.",
  },
] as const;
