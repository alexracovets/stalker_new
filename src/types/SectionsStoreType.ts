"use client";

import { SectionType } from "@types";

export interface SectionsStoreType {
    sections: SectionType[];
    categories: string[];
    currentSection: string;
    prevSection: string;
    nextSection: string;
    setCurrentSection: (value: string) => void;
    setCurrentCategories: (value: string[]) => void;
};