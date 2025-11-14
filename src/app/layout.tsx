import type { Metadata } from "next";
import Script from "next/script";
import { Kaisei_Decol } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  GTM_ID,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  LOCAL_BUSINESS_STRUCTURED_DATA,
  OPEN_GRAPH_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL
} from "@/lib/seo";
// app/layout.tsx  (add at the top, after imports)
export const dynamic = "force-dynamic";
export const revalidate = 0;

const kaiseiDecol = Kaisei_Decol({
  variable: "--font-kaisei-decol",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Lamoon`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Lamoon`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OPEN_GRAPH_IMAGE,
        width: 1200,
        height: 630,
        alt: "Lamoon Thaï Spa - massage thaïlandais et institut de beauté à Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Lamoon`,
    description: DEFAULT_DESCRIPTION,
    images: [OPEN_GRAPH_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasGtm = GTM_ID.length > 0;

  return (
    <html lang="fr">
      <head>
        <script
          key="structured-data"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_STRUCTURED_DATA),
          }}
        />
      </head>
      <body
        className={`${kaiseiDecol.variable} font-sans antialiased`}
      >
        {hasGtm && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {hasGtm && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
