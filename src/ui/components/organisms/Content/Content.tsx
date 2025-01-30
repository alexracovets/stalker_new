"use client";

import { JustChildren } from "@/types";
import { ContentBorder } from "@components/atoms";

export const Content = ({ children }: JustChildren) => {
    return (
        <div
            className="relative"
        >
            <ContentBorder />
            {children}
        </div>
    );
}