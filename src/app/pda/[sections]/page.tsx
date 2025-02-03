import { redirect } from "next/navigation";

import sections from "@data/sections.json";

interface Section {
    id: string;
    name: string;
    description?: string;
}

interface SectionsPageType {
    params: { sections: string };
}

export default async function Sections({ params }: SectionsPageType) {
    const sectionData = sections.find((section: Section) =>
        section.id === params.sections
    );

    if (!sectionData) {
        redirect("/pda/404");
    }

    return (
        <div>
            <h1>{sectionData.name}</h1>
        </div>
    );
}