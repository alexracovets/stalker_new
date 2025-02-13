"use client";

import { JustChildren } from "@/types";

export const ElementsInnerLeft = ({ children }: JustChildren) => {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    );
};