"use client";

import { NavigationGroupLinksType } from "@/types";

export const NavigationGroupLinks = ({ setCurrentSection, children }: NavigationGroupLinksType) => {
    return (
        <ul
            onMouseLeave={() => setCurrentSection()}
            className="flex justify-center items-center gap-x-[8rem]"
        >
            {children}
        </ul>
    );
};