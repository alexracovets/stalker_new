"use client";

import { useState } from "react";
import { FC } from "react";

export interface CategoryType {
    ico: FC<{ color: string }>;
    name: string;
    route: string | false
}

export const useSidebarNavigation = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);


    return { categories, setCategories };
};