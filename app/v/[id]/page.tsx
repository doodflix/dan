import {
    CalendarIcon,
    CubeIcon,
    DownloadIcon,
    LapTimerIcon,
    RocketIcon,
    Share1Icon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { humanDuration, humanSize } from "@/lib/utils";
import { SITENAME } from "@/lib/constants";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";
import LikeButton from "@/components/like-button";
import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
import SearchCardList from "@/components/search/search-list";
import doodstream from "@/lib/doodstream";

type PageProps = {
    params: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await doodstream.getFile({ file_code: params.id as string });
     const upstream = await doodstream.getUpstream();
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `Bokep ${file.title} - ${SITENAME}`;
    const description = `Video Bokep ABG ${file.title} di ${SITENAME} Video Bokep Indo Bocil Hijab Perawan Memek Pink Sange Brutal, Cwe Cantik Cindo Sange Memek Pink Colmek Crot Lendir.`;
    const image = file.splash_img;
    const previousOgImages = (await parent).openGraph?.images || [];
    const previousTwImages = (await parent).twitter?.images || [];

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: [...previousTwImages, image],
        },
        openGraph: {
            title,
            description,
            images: [...previousOgImages, image],
            url: `/v/${file.filecode}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.filecode}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });
    const upstream = await doodstream.getUpstream();

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }

    const file = data.result[0];
        const jsonLd2 = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `Bokep ${file.title} - ${SITENAME}`,
        image: file.splash_img,
        description: `Video Bokep ABG ${file.title} di ${SITENAME} Video Bokep Indo Bocil Hijab Perawan Memek Pink Sange Brutal, Cwe Cantik Cindo Sange Memek Pink Colmek Crot Lendir.`,
        url: `https://abgflix.com/v/${file.filecode}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME} - Bokep ABG Viral`,
            logo: 'https://abgflix.com/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://abgflix.com'
              },
        interactionStatistic: {
            '@type': `InteractionCounter`,
                userInteractionCount: `${file.views}`,
            interactionType: {
                '@type': `ReadAction`,
                target: `https://abgflix.com/v/${file.filecode}`
            }  
        }
        }
        const jsonLd3 = {
            '@context': 'https://schema.org', 
            '@type': 'Book', 
            'name': `Bokep ${file.title} - ${SITENAME}`, 
            'aggregateRating': {
            '@type': 'AggregateRating',	
                'ratingValue': '5',	
                'ratingCount': `${file.views}`,	
                'bestRating': '5',	
                'worstRating': '1' }
        }
    const jsonLd4 = {
  "@context": "http://schema.org",
  "@type": "VideoObject",
  "name": 'Bokep ${file.title} - ${SITENAME}',
  "description": 'Video Bokep ABG ${file.title} di ${SITENAME} Video Bokep Indo Bocil Hijab Perawan Memek Pink Sange Brutal, Cwe Cantik Cindo Sange Memek Pink Colmek Crot Lendir.',
  "thumbnailUrl": file.splash_img,
  "uploadDate": new Date(
            file.uploaded + "00:00:00.000Z"
        ).toISOString(),
  "duration": file.length,
  "embedUrl": 'https://abgflix.com/v/${file.filecode}',
  "author": {
	"@type": "Thing",
	"name": '${SITENAME} - Bokep ABG Viral'
            }
        }
    return (
        <div className="grid col-span-full gap-4 md:gap-4 md:mx-10">
        <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd3) }}
        />
	<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd4) }}
        />
        {/* ... */}
        </section>
            <iframe
                className="w-full h-[30vh] md:h-[55vh] lg:h-[70vh]"
                src={`https://${upstream}/e/${file.filecode}`}
                scrolling="no"
                title={file.title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        Bokep {file.title}
                    </CardTitle>
                </CardHeader>
            </Card>
            <p>Video Bokep ABG ${file.title} di ${SITENAME} Video bokep indo bocil hijab perawan memek pink sange brutal, cwe cantik cindo sange memek pink colmek crot lendir. Koleksi bokep indo viral terbaru hanya di ${SITENAME}. Nonton bokep lagi viral di tiktok ${file.title}, jilbab tobrut sange memek pink, video bokep dengan mantap disebar di twitter ${file.title}. Video bokep sotwe cindo ngewe pacar cek in di oyo viral ${SITENAME}</p>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video Bokep {file.title}
            </h2>
            <SearchCardList query={file.title.split(" ")[1]} />
<p>{SITENAME} Video bokep ABG indo terbaru viral Bokep {file.title} Hot Twitter doodstream.</p>
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2x294z2b4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
        </div>
    );
}
