"use client";

import { NavigationGroupWrapperType } from "@types";

export const NavigationGroupWrapper = ({ menuRef, children }: NavigationGroupWrapperType) => {

    return (
        <nav className="h-full relative" ref={menuRef}>
            {children}
        </nav>
    )
};