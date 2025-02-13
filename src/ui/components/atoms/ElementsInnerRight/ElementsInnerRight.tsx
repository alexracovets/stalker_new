"use client";

import { JustChildren } from "@/types";

export const ElementsInnerRight = ({ children }: JustChildren) => {
    return (
        <div
            className="flex flex-col pr-[12.7rem]"
        >
            {children}
        </div>
    );
};