"use client";

import Image from "next/image";

interface InfoBlockType {
    infoes: string[];
    how_to_get?: string[];
};

export const InfoBlock = ({ infoes, how_to_get }: InfoBlockType) => {
    return (
        <div
            className="flex flex-col w-full mb-[9.8rem] gap-y-[1.5rem]"
        >
            {infoes.map((info: string, idx: number) => {
                return (
                    <p
                        key={idx}
                        className="text-pda-white text-[2rem] leading-[2.9rem] font-roboto"
                    >
                        {info}
                    </p>
                )
            })}
            {
                how_to_get && <div
                    className="flex items-center gap-x-[1.2rem] w-fit px-[1.6rem] py-[.9rem] bg-pda-ico rounded-[.4rem]"
                >
                    <div
                        className="relative w-[3.2rem] h-[3.2rem]"
                    >
                        <Image src={"/svg/marker.svg"} alt="marker" fill className="object-cover" />
                    </div>
                    <span
                        className="text-[2.5rem] text-pda-destructive font-roboto_condensed"
                    >
                        Як отримати
                    </span>
                </div>
            }
        </div>
    );
};