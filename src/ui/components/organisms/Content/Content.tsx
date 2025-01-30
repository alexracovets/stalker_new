"use client";

import { JustChildren } from "@/types";

export const Content = ({ children }: JustChildren) => {
    return (
        <div
            className="bg-orange-400"
        >
            {children}
        </div>
    );
}