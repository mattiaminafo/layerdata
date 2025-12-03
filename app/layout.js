import { Work_Sans } from "next/font/google";
import "./globals.css";

// Usando Work Sans da Google Fonts
const workSans = Work_Sans({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans"
});

export const metadata = {
  title: "LayerData",
  description: "We create order in your business data",
  icons: {
    icon: '/images/logo_layerdata.png',
    shortcut: '/images/logo_layerdata.png',
    apple: '/images/logo_layerdata.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cyberpunk" className={`${workSans.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TFF79TVX');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFF79TVX"
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
