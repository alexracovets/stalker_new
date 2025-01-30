"use client";

import { NavigationGroupLinksType } from "@/types";

export const NavigationGroupLinks = ({ setCurrentCategory, children }: NavigationGroupLinksType) => {
    return (
        <ul
            onMouseLeave={() => setCurrentCategory()}
            className="flex justify-center items-center gap-x-[8rem]"
        >
            {children}
        </ul>
    );
};