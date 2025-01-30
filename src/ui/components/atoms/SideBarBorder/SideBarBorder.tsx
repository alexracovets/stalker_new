"use client";

import Image from "next/image";

export const SideBarBorder = () => {
    return (
        <div className="absolute left-0 top-0 w-full h-full">
            <div className="relative w-full h-full">
                <div className="absolute right-0 top-0 h-full w-[.8rem]">
                    <div className="relative w-full h-full">
                        <Image src="/pda/left.jpg" fill alt="center" className="object-cover" />
                    </div>
                </div>
                <div className="absolute left-0 top-0  h-full w-[.9rem]">
                    <div className="relative w-full h-full">
                        <Image src="/pda/left.jpg" fill alt="center" className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};