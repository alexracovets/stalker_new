"use client";

import { CategoryType } from "@types";

export interface CategoriesStoreType {
    categories: CategoryType[];
    currentCategory: string;
    prevCategory: string;
    nextCategory: string;
    setCurrentCategory: (value: string) => void;
};