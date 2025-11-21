import "./globals.css";
import Provider from "./Provider";

// ⭐ Features → Dynamic SEO Keywords
const featureKeywords = [
  "TIN Registration",
  "Individual Tax BD",
  "Corporate Tax BD",
  "Tax Return Bangladesh",
  "Tax Advisory BD",
  "BIN Registration BD",
  "Monthly VAT Return",
  "Online VAT Return BD",
  "VAT Audit BD",
  "VAT Consultancy Bangladesh",
  "Company Registration BD",
  "Trade License BD",
  "Trademark Service BD",
  "IRC Service Bangladesh",
  "ERC Service BD",
  "Business Audit BD",
  "Financial Audit Bangladesh",
  "RJSC Registration BD",
  "Share Transfer BD",
  "Import Export Certificate BD",
  "Legal Compliance Bangladesh",
  "Custom Law BD",
  "Refund Adjustment BD",
  "Tax Appeal Bangladesh",
  "Tax Tribunal BD",
];

// ⭐ NEXT.JS 16 PERFECT METADATA
export const metadata = {
  title: {
    default:
      "TaxLine BD – Best Tax, VAT & Company Registration Services in Bangladesh",
    template: "%s | TaxLine BD",
  },

  description:
    "TaxLine BD offers Tax, VAT, RJSC, Company Registration, Audit, and Legal Compliance services in Bangladesh.",

  keywords: [
    "TaxLine BD",
    "Tax Service BD",
    "VAT Service BD",
    "Company Registration Bangladesh",
    "RJSC BD",
    "Trade License",
    "Business Audit BD",
    ...featureKeywords,
  ],

  robots: "index, follow",

  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg", // ⭐ এখানে Logo
  },

  manifest: "/manifest.json",
  themeColor: "#10B981",

  // ⭐ Open Graph
  openGraph: {
    title: "TaxLine BD – Tax, VAT & Legal Consultancy in Bangladesh",
    description:
      "TIN, BIN, VAT Return, RJSC, Company Registration & Business Audit Services.",
    url: "https://taxline-bd.vercel.app/",
    siteName: "TaxLine BD",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: "https://taxline-bd.vercel.app/logo.jpg",
        width: 600,
        height: 600,
        alt: "TaxLine BD Logo",
      },
    ],
  },

  // ⭐ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "TaxLine BD – Professional Tax & VAT Service",
    description:
      "TIN, BIN, VAT, RJSC, Company Registration & Accounting Service in Bangladesh.",
    images: ["https://taxline-bd.vercel.app/logo.jpg"],
  },

  // ⭐ Google Fonts (Next.js 16 way)
  other: {
    "preconnect-google": "https://fonts.googleapis.com",
    "preconnect-gstatic": "https://fonts.gstatic.com",
    "google-font":
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
  },
};

// ⭐ Ready Layout (WITHOUT <head>) → Hydration Safe
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">
        {/* ⭐ Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TaxLine BD",
              url: "https://taxline-bd.vercel.app/",
              logo: "https://taxline-bd.vercel.app/logo.jpg",
              description:
                "Professional Tax, VAT, RJSC & Company Registration Services in Bangladesh.",
              service: featureKeywords.map((kw) => ({
                "@type": "Service",
                name: kw,
              })),
            }),
          }}
        />

        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
