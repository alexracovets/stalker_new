"use client";

import { JustChildren } from "@types";

export const FooterWrapper = ({ children }: JustChildren) => {
    return (
        <footer
            className="relative w-full flex justify-start items-center gap-x-[27.8rem] p-[1rem]"
        >
            {children}
        </footer>
    );
};