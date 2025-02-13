"use client";

import Image from "next/image";

import { cn } from "@utils";

interface AtomImageType {
    wrapper?: string;
    src: string;
    alt: string;
    className?: string;
};

export const AtomImage = ({ wrapper, src, alt, className }: AtomImageType) => {
    return (
        <div
            className={cn(
                "relative",
                wrapper
            )}
        >
            <Image
                src={src}
                alt={alt}
                fill
                priority
                className={cn(
                    "object-cover",
                    className
                )} />
        </div>
    );
};