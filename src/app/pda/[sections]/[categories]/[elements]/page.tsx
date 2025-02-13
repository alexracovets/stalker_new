
import { ArmorTemplate } from "@components/templates";
import { Block404 } from "@components/atoms";

interface PageProps {
    params: Promise<{
        categories: string,
        sections: string,
        elements: string
    }>;
};

export default async function Elements({ params }: PageProps) {
    const { categories: category, sections: section, elements: element } = await params;
    let data;

    try {
        data = (await import(`@data/pages/sections/${section}/${category}/${element}.json`)).default;
    } catch { }

    return (
        <div
            className="flex flex-col flex-grow h-full"
        >
            {
                data ? <>
                    {
                        data.type === "armor" ? <ArmorTemplate data={data} /> : null
                    }
                </>
                    : <Block404 />
            }
        </div>
    );
};