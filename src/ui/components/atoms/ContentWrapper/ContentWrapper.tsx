"use client";

import { JustChildren } from "@types";

export const ContentWrapper = ({ children }: JustChildren) => {
    return (
        <div className="relative">
            {children}
        </div>
    );
};