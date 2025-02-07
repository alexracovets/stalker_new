
// import elementsPages from "@data/pages/map/elements.json";
import { Block404 } from "@components/atoms";

interface PageProps {
    params: Promise<{
        categories: string,
        sections: string,
        elements: string
    }>;
}

// export async function generateStaticParams() {
//     const pageMap = elementsPages.map((page) => {
//         return {
//             sections: page.section,
//             categories: page.category,
//             elements: page.element
//         };
//     });

//     return pageMap;
// }

export default async function Elements({ params }: PageProps) {
    const { categories: category, sections: section, elements: element } = await params;
    let data;
    let isData = true;

    try {
        data = (await import(`@data/pages/sections/${section}/${category}/${element}.json`)).default;
    } catch {
        isData = false;
    }

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