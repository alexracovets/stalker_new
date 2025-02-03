"use server";

import { redirect } from "next/navigation";

import categories from "@data/sections.json";

interface Category {
    id: string;
    name: string;
    description?: string;
}

interface CategoriesPageType {
    params: { categories: string };
}

export default async function Categories({ params }: CategoriesPageType) {
    const { categories: id } = await params;
    const categoryData = categories.find((section: Category) =>
        section.id === id
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