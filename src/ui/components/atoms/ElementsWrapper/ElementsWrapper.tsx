"use client";

import { JustChildren } from "@/types";

export const ElementsWrapper = ({ children }: JustChildren) => {
    return (
        <div
            className="flex justify-between gap-x-[6.4rem] py-[3.2rem]"
        >
            {children}
        </div>
    );
};