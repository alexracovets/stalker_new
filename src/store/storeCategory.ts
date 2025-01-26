import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import categories from "@/data/categories.json";

interface Categories_Type {
    categories: {
        id: string;
        name: string;
        route: string;
    }[];
};

const storeCategories = create<Categories_Type>()(
    immer((set) => ({
        categories: categories,
        currentCategory: "",
    }))
);

export default storeCategories;