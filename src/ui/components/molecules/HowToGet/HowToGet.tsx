"use client";

import { cn } from "@/utils";
import Image from "next/image";

interface HowToGetType {
    how_to_get: string[] | undefined;
    marginBottom?: string;
};

export const HowToGet = ({ how_to_get, marginBottom }: HowToGetType) => {
    if (!how_to_get) return null;
    return (
        <div
            className={cn(
                "flex items-center gap-x-[1.2rem] w-fit px-[1.6rem] py-[.9rem] bg-pda-ico rounded-[.4rem]",
                marginBottom
            )}
        >
            <div
                className="relative w-[3.2rem] h-[3.2rem]"
            >
                <Image src={"/svg/marker.svg"} alt="marker" fill className="object-cover" />
            </div>
            <span
                className="text-[2.5rem] text-pda-destructive font-roboto_condensed"
            >
                Як отримати
            </span>
        </div>
    )
}