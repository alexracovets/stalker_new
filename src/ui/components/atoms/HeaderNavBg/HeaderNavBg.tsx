"use client";

import Image from "next/image";

export const HeaderNavBg = () => {
    return (
        <>
            <div className="absolute left-0 top-0 pointer-events-none">
                <div className="relative w-[41rem] h-[8.8rem]">
                    <Image src="/headerPDA/left_selection.png" fill alt="left" className="object-cover" />
                </div>
            </div>
            <div className="absolute right-0 top-0 pointer-events-none">
                <div className="relative w-[41rem] h-[8.8rem]">
                    <Image src="/headerPDA/right_selection.png" fill alt="left" className="object-cover" />
                </div>
            </div>
        </>
    );
};