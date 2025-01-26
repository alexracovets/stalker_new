"use client";

import { useSearchParams } from 'next/navigation';

export default function Categories() {
    const searchParams = useSearchParams();
    const slug = searchParams.get('id');
    return <p>Post: {slug}</p>;
}