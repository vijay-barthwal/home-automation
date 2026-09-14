import { siteConfig } from "./site-config";
import { products } from "./products";
import { faqs } from "./faq";

/**
 * Organization + LocalBusiness schema, describing who runs the site and what
 * services it offers. Feeds Google rich results, knowledge-panel style
 * entities, and gives AI answer engines (ChatGPT, Perplexity, Google AI
 * Overviews) a structured fact-base to cite instead of guessing from prose.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo-mark.webp`,
    image: `${siteConfig.siteUrl}/logo-mark.webp`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.address,
    sameAs: Object.values(siteConfig.social),
    makesOffer: products.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.title,
        description: p.description,
      },
    })),
  };
}

/** WebSite schema — basic site identity for search engines. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.fullName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
  };
}

/**
 * FAQPage schema, generated from the same `faqs` data the visible FAQ
 * section renders — keeps schema and on-page content from drifting apart,
 * which Google requires for FAQ rich results to stay eligible.
 */
export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
