"use client";

import { cn } from "@/utils";
import { AtomImage } from "@components/atoms";

interface ElementsShowImageType {
    image: string;
    name: string;
    variant?: "secondary" | "pistols";
};

export const ElementsShowImage = ({ image, name, variant }: ElementsShowImageType) => {
    return (
        <AtomImage
            wrapper={cn(
                "w-[38.8rem] h-[38.8rem] mt-[7.4rem]",
                variant === "secondary" && "w-[25.6rem] h-[25.6rem] mt-[8.4rem]",
                variant === "pistols" && "w-[56.3rem] h-[20.4rem] m-0 mb-[3.2rem]"
            )}
            src={image}
            alt={name}
        />
    );
};