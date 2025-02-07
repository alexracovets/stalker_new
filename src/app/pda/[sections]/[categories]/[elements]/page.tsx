
// import elementsPages from "@data/pages/map/elements.json";
import { ArmorProtection } from "@components/molecules";
import { DashLine, Block404 } from "@components/atoms";
import Image from "next/image";
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
        <div
            className="flex flex-col flex-grow"
        >
            {
                data ?
                    <div
                        className="flex justify-between gap-x-[6.4rem]"
                    >
                        <div className="flex flex-col flex-grow">
                            <div className="flex flex-col">
                                <h1 className="text-[3.4rem] text-pda-destructive font-[500] font-roboto_condensed mb-[1rem]" >
                                    {data.name}
                                </h1>
                                <h3 className="text-[1.8rem] text-pda-orange font-roboto mb-[1.2rem]">
                                    {data.title}
                                </h3>
                                <DashLine />
                            </div>
                            <div
                                className="flex flex-col w-full text-[2rem] text-pda-white leading-[2.9rem] font-roboto"
                            >
                                {data.info.map((info: string, idx: number) => {
                                    return (
                                        <p key={idx}>{info}</p>
                                    )
                                })}
                            </div>
                            <ArmorProtection resistance={data.resistance} />
                        </div>
                        <div>
                            <div
                                className="relative w-[38.8rem] h-[38.8rem]"
                            >
                                <Image src={data.image} alt={data.name} fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                    :
                    <Block404 />

            }
        </div>
    );
}