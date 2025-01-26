"use client";

import { JustChildren } from "@/types";

export const PDALayout = ({ children }: Readonly<JustChildren>) => {
    return (
        <main>
            {children}
        </main>
    );
};