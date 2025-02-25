
import { ArmorTemplate, MaskTemplate, KitsTemplate, PistolsLayout } from "@components/templates";
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
                    {(() => {
                        switch (data.type) {
                            case "armor":
                                return <ArmorTemplate {...data} />;
                            case "mask":
                                return <MaskTemplate {...data} />;
                            case "composite":
                                return <ArmorTemplate {...data} />;
                            case "kit":
                                return <KitsTemplate {...data} />;
                            case "pistols":
                                return <PistolsLayout {...data} />;
                            default:
                                return null;
                        }
                    })()}
                </>
                    : <Block404 />
            }
        </div>
    );
};