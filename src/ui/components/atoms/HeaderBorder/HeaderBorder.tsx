"use client";

import Image from "next/image";

export const HeaderBorder = () => {
    return (
        <div className="relative w-full h-[1rem]">
            <Image src="/pda/top.png" fill alt="top" className="object-cover" />
        </div>
    );
};