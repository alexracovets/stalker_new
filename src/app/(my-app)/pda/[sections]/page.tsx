import { SectionPageLayout } from "@components/templates";

// import sectionsPages from "@data/pages/map/sections.json";

interface PageProps {
    params: Promise<{ sections: string }>;
};

// export async function generateStaticParams({ params }: PageProps) {
//     const { sections: section } = await params;
//     const sectionCheck = sectionsPages.find((page) => page.section === section);
//     console.log(sectionCheck);
//     return sectionsPages.map((page) => ({
//         sections: page.section,
//     }));
// }

export default async function Sections({ params }: PageProps) {
    const { sections: section } = await params;
    let data;
    let isData = true;

    try {
        data = (await import(`@data/pages/sections/${section}.json`)).default;
    } catch {
        isData = false;
    }

    return (
        <SectionPageLayout data={isData ? data : null} />
    );
}