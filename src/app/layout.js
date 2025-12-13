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

// ⭐ NEXT.JS METADATA
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

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/TaxLine_BD-PNG.png",
    apple: "/TaxLine_BD-PNG.png",
  },

  manifest: "/manifest.json",
  themeColor: "#10B981",

  // ⭐ Open Graph
  openGraph: {
    title: "TaxLine BD – Tax, VAT & Legal Consultancy in Bangladesh",
    description:
      "TIN, BIN, VAT Return, RJSC, Company Registration & Business Audit Services.",
    url: "https://taxlinebd.com/",
    siteName: "TaxLine BD",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: "https://taxlinebd.com/TaxLine_BD-PNG.png",
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
    images: ["https://taxlinebd.com/TaxLine_BD-PNG.png"],
  },

  // ⭐ Extra Meta (IMPORTANT)
  other: {
    "google-site-verification": "GnjkMYUO03cTmMU6uB7go6PzQr0rMhBXxCGl7enPt04",
    "preconnect-google": "https://fonts.googleapis.com",
    "preconnect-gstatic": "https://fonts.gstatic.com",
    "google-font":
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
  },
};

// ⭐ Root Layout
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
              url: "https://taxlinebd.com/",
              logo: "https://taxlinebd.com/TaxLine_BD-PNG.png",
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
