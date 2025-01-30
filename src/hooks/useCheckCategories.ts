"use client";

import { storeCategories } from '@store';
import { usePathname } from 'next/navigation'
import { useEffect } from "react";

export const useCheckCategories = () => {
    const setCurrentCategory = storeCategories((state) => state.setCurrentCategory);
    const currentPath = usePathname();

    useEffect(() => {
        if (!currentPath) return;

        const categoryMatch = currentPath.match(/^\/[^\/]+\/([^\/]+)/);
        const category = categoryMatch ? categoryMatch[1] : null;

        if (category) {
            setCurrentCategory(category);
        }
    }, [currentPath]);

    return null;
};