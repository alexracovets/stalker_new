"use client";

import { JustChildren } from "@/types";

export const ElementsInnerRight = ({ children }: JustChildren) => {
    return (
        <div
            className="flex flex-col justify-center items-center pr-[12.7rem] gap-y-[5.6rem]"
        >
            {children}
        </div>
    );
};