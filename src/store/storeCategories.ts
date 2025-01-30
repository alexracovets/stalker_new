import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { CategoriesStoreType } from '@types';

import categories from "@data/categories.json";

export const storeCategories = create<CategoriesStoreType>()(
    immer((set) => ({
        categories: categories,
        currentCategory: "",
        prevCategory: "",
        nextCategory: "",
        setCurrentCategory: (value: string) => set((state) => { state.currentCategory = value; }),
    }))
);