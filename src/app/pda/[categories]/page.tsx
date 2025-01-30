"use client";

import { useParams } from "next/navigation";

export default function Categories() {
    const params = useParams();

    return <p>Page: {params.categories}</p>;
}