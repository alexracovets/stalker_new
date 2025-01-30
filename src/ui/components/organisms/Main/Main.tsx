"use client";

import { JustChildren } from "@/types";

export const Main = ({ children }: JustChildren) => {

    return (
        <main
            className="grid grid-cols-[30%_70%] flex-grow"
        >
            {children}
        </main>
    );
};