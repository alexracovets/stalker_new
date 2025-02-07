"use client";

import { DashLine } from "@components/atoms"; 

interface TitleBlockType {
    name: string;
    title: string;
};

export const TitleBlock = ({ name, title }: TitleBlockType) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-[3.4rem] text-pda-destructive font-[500] font-roboto_condensed mb-[1rem]" >
                {name}
            </h1>
            <h3 className="text-[1.8rem] text-pda-orange font-roboto mb-[1.2rem]">
                {title}
            </h3>
            <DashLine /> 
        </div>
    );
};