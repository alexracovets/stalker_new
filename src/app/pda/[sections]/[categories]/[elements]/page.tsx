"use client";

import { useParams } from "next/navigation";

export default function Elements() {
    const params = useParams();

    return <p>Елемент: {params.elements}</p>;
}