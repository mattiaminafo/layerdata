import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const gotham = localFont({
  src: [
    {
      path: "../../public/fonts/gotham-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});

export const metadata = {
  title: "LayerData - Marketing Technology Solutions",
  description: "We create order in your business data. Advanced marketing technology, data analytics, and automation solutions for growing companies.",
  keywords: "marketing technology, data analytics, automation, GA4, GTM, business intelligence",
  openGraph: {
    title: "LayerData - Marketing Technology Solutions",
    description: "We create order in your business data. Advanced marketing technology, data analytics, and automation solutions for growing companies.",
    locale: "en_US",
    type: "website",
  },
};

export default function EnLayout({ children }) {
  return (
    <html lang="en" data-theme="cyberpunk" className={`${poppins.className} ${gotham.variable}`}>
      <head>
        {/* Hreflang tags for multilingual SEO */}
        <link rel="alternate" hrefLang="en" href="https://layerdata.eu/en" />
        <link rel="alternate" hrefLang="it" href="https://layerdata.eu/it" />
        <link rel="alternate" hrefLang="x-default" href="https://layerdata.eu/en" />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TM77V2XK');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TM77V2XK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
