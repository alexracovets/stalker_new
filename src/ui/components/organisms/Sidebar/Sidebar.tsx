"use client";

import { SideBarBorder, SidebarWrapper } from "@components/atoms";
import { SearchPages, CategoriesFill } from "@components/molecules";

export const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SideBarBorder />
            <SearchPages />
            <CategoriesFill />
        </SidebarWrapper>
    );
};