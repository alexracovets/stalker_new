import type { Metadata } from "next";

type MetaParams = {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
};

export const generateMetadata = ({
    title,
    description,
    keywords = ["stalker", "game", "database"],
    image = "/default-og.jpg",
}: MetaParams): Metadata => {
    return {
        title: `${title} | Stalker 2`,
        description,
        keywords,
        openGraph: {
            title: `${title} | Stalker 2`,
            description,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Stalker 2`,
            description,
            images: [image],
        },
    };
};