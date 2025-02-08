"use client";

import Image from "next/image";

import { ArmorProtection, InfoBlock, TitleBlock } from "@components/molecules";
import { ElementsDataType } from "@/types";

interface TestPageType {
    data: ElementsDataType;
}

export const TestPage = ({ data }: TestPageType) => {

    return (
        <div
            className="flex justify-between gap-x-[6.4rem] py-[3.2rem]"
        >
            <div className="flex flex-col flex-grow">
                <TitleBlock name={data.name} title={data.title} />
                <InfoBlock infoes={data.info} how_to_get={data.how_to_get} />
                <ArmorProtection resistance={data.resistance} />
            </div>
            <div
                className="flex flex-col pr-[12.7rem]"
            >
                <div
                    className="relative w-[38.8rem] h-[38.8rem]"
                >
                    <Image src={data.image} alt={data.name} fill className="object-cover" priority />
                </div>
            </div>
        </div >
    );
};