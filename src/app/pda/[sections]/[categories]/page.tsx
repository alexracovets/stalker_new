"use server";

import { redirect } from "next/navigation";

import sections from "@data/sections.json";

interface Category {
    id: string;
    name: string;
    description?: string;
}

interface CategoriesPageType {
    params: { categories: string };
}

export default async function Categories({ params }: CategoriesPageType) {
    const categoryData = sections.find((category: Category) =>
        category.id === params.categories
    );

    if (!categoryData) {
        redirect("/pda/404");
    }
    return (
        <div>
            <h1>{categoryData.name}</h1>
        </div>
    );
}