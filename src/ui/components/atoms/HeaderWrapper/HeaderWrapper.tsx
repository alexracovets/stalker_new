"use client";

import { JustChildren } from "@/types";

export const HeaderWrapper = ({ children }: JustChildren) => {
    return (
        <header className="mb-[.3rem]">
            {children}
        </header>
    );
};