"use client";

import { SideBarBorder, SidebarWrapper } from "@components/atoms";
import { SearchPages, SidebarNavigation, CategoriesFill } from "@components/molecules";

export const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SideBarBorder />
            <SearchPages />
            <SidebarNavigation />
            <CategoriesFill />
        </SidebarWrapper>
    );
};