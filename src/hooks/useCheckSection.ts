"use client";

import { storeSections } from '@store';
import { usePathname } from 'next/navigation'
import { useCallback, useEffect } from "react";

export const useCheckSection = () => {
    const setCurrentSection = storeSections((state) => state.setCurrentSection);
    const setCurrentCategories = storeSections((state) => state.setCurrentCategories);
    const sections = storeSections((state) => state.sections);
    const currentPath = usePathname();

    const setCategories = useCallback(() => {
        const currentSection = sections.find((section) => section.route === currentPath);
        setCurrentCategories(currentSection ? currentSection.categories : []); 
    }, [sections, currentPath]);

    useEffect(() => {
        if (!currentPath) return;

        const sectionMatch = currentPath.match(/^\/[^\/]+\/([^\/]+)/);
        const section = sectionMatch ? sectionMatch[1] : null;

        if (section) {
            setCurrentSection(section);
            setCategories();
        }
    }, [currentPath, setCurrentSection]);

    return null;
};