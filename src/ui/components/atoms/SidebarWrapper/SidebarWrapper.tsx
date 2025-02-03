"use client";

import { JustChildren } from "@/types";

export const SidebarWrapper = ({ children }: JustChildren) => {
    return (
        <aside className="relative px-[.8rem]" >
            <div className="flex flex-col gap-y-[2rem] w-full px-[1rem] py-[2rem]">
                {children}
            </div>
        </aside>
    );
};