import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Bokep ABG Viral`,
    description: `${SITENAME} Video Bokep ABG Indo Viral Bocil SMA Colmek Crot Lendir Hijab Tobrut Ngentot Pacar Viral ABG Cindo Ngewe Memek Pink Terbaru`,
    metadataBase: new URL("https://abgflix.com"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Bokep ABG Viral`,
        description: `${SITENAME} Video Bokep ABG Indo Viral Bocil SMA Colmek Crot Lendir Hijab Tobrut Ngentot Pacar Viral ABG Cindo Ngewe Memek Pink Terbaru`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'X_f3Svd_dZDYCMZkgOX6dgNsmS0sRuFKaO2qA1ARbeM',
        yandex: '382650724620af61',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME} - Bokep ABG Viral`,
        "description": `${SITENAME} Video Bokep ABG Indo Viral Bocil SMA Colmek Crot Lendir Hijab Tobrut Ngentot Pacar Viral ABG Cindo Ngewe Memek Pink Terbaru`,
        "logo": "https://abgflix.com/favicon.ico",
        "url": "https://abgflix.com",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://abgflix.com"
            },
            "foundingDate":"2024-12-09"
        }
        const jsonLd1 = {
            "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${SITENAME} - Bokep ABG Viral`,
        "url": "https://abgflix.com",
        "description": `${SITENAME} Video Bokep ABG Indo Viral Bocil SMA Colmek Crot Lendir Hijab Tobrut Ngentot Pacar Viral ABG Cindo Ngewe Memek Pink Terbaru`,
        "image": "https://abgflix.com/favicon.ico",
        "potentialAction":{
            "@type":"ReadAction",
            "target":"https://abgflix.com"}
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME} - Bokep ABG Viral`,
        "url": "https://abgflix.com",
        "description": `${SITENAME} Video Bokep ABG Indo Viral Bocil SMA Colmek Crot Lendir Hijab Tobrut Ngentot Pacar Viral ABG Cindo Ngewe Memek Pink Terbaru`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://abgflix.com/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
