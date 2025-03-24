// import categoriesPages from "@data/pages/map/categories.json";
import { Block404 } from "@components/atoms";
interface PageProps {
    params: Promise<{
        categories: string,
        sections: string
    }>;
}

// export async function generateStaticParams() {
//     const pageMap = categoriesPages.map((page) => {
//         return {
//             sections: page.section,
//             categories: page.category
//         };
//     });

//     return pageMap;
// }

export default async function Categories({ params }: PageProps) {
    const { categories: category, sections: section } = await params;
    let data; 

    try {
        data = (await import(`@data/pages/sections/${section}/${category}.json`)).default;
    } catch {}

    return (
        <div>
            {
                data ?
                    data.name
                    :
                    <Block404 />
            }
        </div>
    );
}