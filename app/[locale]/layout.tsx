import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map(locale => { locale })
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Levy Jr Portfolio",
  description: "Não é só um site, é uma experiência! Se você deseja aproveitar ao máximo as vantagens que a presença online pode oferecer, estou aqui para ajudar a transformar essa visão em realidade.",
  verification: {
    google: 'GAGdEvTt-eC51oiqkqLRCE6pVutnClRVYnI-pM47pRA'
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string
  }
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body
        className={`${inter.className}`}>
        {children}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2228644940829379');
fbq('track', 'PageView');`}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2228644940829379&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
