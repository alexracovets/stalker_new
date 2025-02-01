"use client";

import { JustChildren } from "@/types";

export const SidebarWrapper = ({ children }: JustChildren) => {
    return (
        <aside className="relative p-[.8rem]" >
            {children}
        </aside>
    );
};