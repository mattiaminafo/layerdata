import { Mulish } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

// Usando Mulish da Google Fonts
const mulish = Mulish({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-mulish"
});

// Manteniamo Gotham per i titoli
const gotham = localFont({
  src: [
    {
      path: "../../public/fonts/gotham-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mulish",
});

export const metadata = {
  title: "LayerData - Soluzioni di Marketing Technology",
  description: "Creiamo ordine nei tuoi dati aziendali. Soluzioni avanzate di marketing technology, analytics e automazione per aziende in crescita.",
  keywords: "marketing technology, analytics dati, automazione, GA4, GTM, business intelligence",
  icons: {
    icon: '/layerdata_logo.png',
    shortcut: '/layerdata_logo.png',
    apple: '/layerdata_logo.png',
  },
  openGraph: {
    title: "LayerData - Soluzioni di Marketing Technology",
    description: "Creiamo ordine nei tuoi dati aziendali. Soluzioni avanzate di marketing technology, analytics e automazione per aziende in crescita.",
    locale: "it_IT",
    type: "website",
  },
};

export default function ItLayout({ children }) {
  return (
    <html lang="it" data-theme="cyberpunk" className={`${mulish.variable} ${gotham.variable}`}>
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
