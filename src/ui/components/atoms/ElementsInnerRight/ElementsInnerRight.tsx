"use client";

import { cn } from "@/utils";

interface ElementsInnerRightType {
    variant?: string;
    children: React.ReactNode;
};

export const ElementsInnerRight = ({ variant, children }: ElementsInnerRightType) => {
    return (
        <div
            className={cn(
                "flex flex-col pr-[11.7rem] gap-y-[5.6rem]",
                variant === "pistols" && "pt-[7.4rem]"
            )}
        >
            {children}
        </div>
    );
};