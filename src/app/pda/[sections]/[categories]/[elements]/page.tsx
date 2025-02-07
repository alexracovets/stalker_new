import { Block404 } from "@components/atoms";
import { TestPage } from "@components/templates";

interface PageProps {
    params: Promise<{
        categories: string,
        sections: string,
        elements: string
    }>;
}

export default async function Elements({ params }: PageProps) {
    const { categories: category, sections: section, elements: element } = await params;
    let data; 

    try {
        data = (await import(`@data/pages/sections/${section}/${category}/${element}.json`)).default;
    } catch {}
    
    return (
        <div
            className="flex flexF-col flex-grow h-full"
        >
            {
                data ? <TestPage data={data} /> : <Block404 />
            }
        </div>
    );
}