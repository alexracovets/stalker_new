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

export default async function Protects({ params }: SectionsPageType) {
    return (
        <div>
            <h1>
                Захист
            </h1>
            <h3>
                Категорії
            </h3>
            
        </div>
    );
}