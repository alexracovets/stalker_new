"use client";

import { JustChildren } from "@types";

export const NavigationWrapper = ({ children }: JustChildren) => {
    return (
        <div
            className="relative flex justify-center items-center bg-pda-black border-pda-border border-y-[.1rem] gap-x-[2.8rem] z-[1]"
        >
            {children}
        </div>
    );
};