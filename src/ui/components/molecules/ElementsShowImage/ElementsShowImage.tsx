"use client";

import { cn } from "@/utils";
import { AtomImage } from "@components/atoms";

interface ElementsShowImageType {
    image: string;
    name: string;
    variant?: "secondary";
};

export const ElementsShowImage = ({ image, name, variant }: ElementsShowImageType) => {
    return (
        <AtomImage
            wrapper={cn(
                "w-[38.8rem] h-[38.8rem] mt-[7.4rem]",
                variant === "secondary" && "w-[25.6rem] h-[25.6rem] mt-[8.4rem]"
            )}
            src={image}
            alt={name}
        />
    );
};