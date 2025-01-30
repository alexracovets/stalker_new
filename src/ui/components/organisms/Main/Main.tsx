"use client";

import { JustChildren } from "@/types";

export const Main = ({ children }: JustChildren) => {

    return (
        <main
            className="grid grid-cols-[52.5rem_auto] flex-grow"
        >
            {children}
        </main>
    );
};