"use client";

import Link from "next/link";
import { Text, AtomImage } from "@components/atoms";
import { cn } from "@/utils";

interface AttachmentsBlockProps {
    name?: string;
    links?: { name: string, url: string }[];
};

export const AttachmentsBlock = ({ name, links }: AttachmentsBlockProps) => {
    console.log(name)
    return (
        <div
            className="flex flex-col w-full mb-[6.4rem]"
        >
            <Text variant="infoPageTitle" asChild="h3">{name}</Text>
            <ul
                className="flex flex-col gap-y-[.85rem] mt-[.4rem]"
            >
                {links?.map((link, idx) => {
                    return (
                        <li key={idx} className="block w-full">
                            <Link href={link.url}
                                className="flex items-center w-full gap-x-[.4rem]"
                            >
                                <AtomImage
                                    wrapper={cn(
                                        "w-[2.4rem] h-[2.4rem]",
                                    )}
                                    src="/svg/attachment.svg"
                                    alt="attachment"
                                />
                                <Text variant="tableValue">{link.name}</Text>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};