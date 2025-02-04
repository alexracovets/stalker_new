import { notFound } from "next/navigation";

import sections from "@data/sections.json";

interface Section {
    id: string;
    name: string;
}

interface PageProps {
    params: Promise<{ sections: string }>;
}

export default async function Sections({ params }: PageProps) {
    const { sections: sectionId } = await params;

    const sectionData = sections.find((section: Section) =>
        section.id === sectionId
    );

    if (!sectionData) {
        notFound();
    }

    return (
        <div>
            <h1>{sectionData.name}</h1>
        </div>
    );
}