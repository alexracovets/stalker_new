"use client";

import { JustChildren } from "@types";

export const ContentWrapper = ({ children }: JustChildren) => {
    return (
        <div className="relative p-[3.2rem]">
            {children}
        </div>
    );
};