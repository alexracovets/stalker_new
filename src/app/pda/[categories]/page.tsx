"use client";

import { useSearchParams } from 'next/navigation';

export default function Page() {
    const searchParams = useSearchParams();
    const slug = searchParams.get('id');
    console.log('slug:', searchParams);
    return <p>Post: {slug}</p>;
}