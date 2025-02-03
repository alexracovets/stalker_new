"use client";

import { useParams } from "next/navigation";

export default function Sections() {
    const params = useParams();

    return <p>Page: {params.sections}</p>;
}