"use client";

import Link from "next/link";

interface PageListBlockType {
    links: {
        name: string;
        route: string;
        sub_links: {
            name: string;
            route: string;
        }[];
    }[];
};

export const PageListBlock = ({ links }: PageListBlockType) => {
    return (
        <ol className="flex flex-wrap gap-y-[5rem] w-full">
            {
                links.map((link, idx) => {
                    return (
                        <li key={idx} className="flex flex-col gap-y-[1.5rem] w-[50%]">
                            <Link
                                href={link.route}
                                className="relative text-[2.5rem] hover:underline"
                            >
                                {link.name}:
                            </Link>
                            <ul
                                className="flex flex-col gap-y-[1rem] pl-[4rem] text-[1.8rem] list-disc"
                            >
                                {
                                    link.sub_links.map((sub_link, index) => {
                                        return (
                                            <li key={index}>
                                                <Link
                                                    href={sub_link.route}
                                                    className="text-[2rem] hover:underline"
                                                >
                                                    {sub_link.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ol>
    );
};