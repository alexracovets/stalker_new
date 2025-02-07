import { notFound } from "next/navigation";

import categoriesPages from "@data/pages/map/categories.json";

interface PageProps {
    params: Promise<{
        categories: string,
        sections: string
    }>;
}

export async function generateStaticParams() {
    const pageMap = categoriesPages.map((page) => {
        return {
            sections: page.section,
            categories: page.category
        };
    });

    return pageMap;
}

export default async function Categories({ params }: PageProps) {
    const { categories: category, sections: section } = await params;
    let data;

    try {
        data = (await import(`@data/pages/sections/${section}/${category}.json`)).default;
    } catch {
        return notFound();
    }

    return (
        <div>
            {
                data.name
            }
        </div>
    );
}