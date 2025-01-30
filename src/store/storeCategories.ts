import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import categories from "@data/categories.json";

interface CategoriesStore_Type {
    categories: {
        id: string;
        name: string;
        route: string;
    }[];
    currentCategory: string;
    prevCategory: string;
    nextCategory: string;
    setCurrentCategory: (value: string) => void;
};

export const storeCategories = create<CategoriesStore_Type>()(
    immer((set) => ({
        categories: categories,
        currentCategory: "",
        prevCategory: "",
        nextCategory: "",
        setCurrentCategory: (value: string) => {
            set((state) => {
                state.currentCategory = value;
            });
        },
    }))
);