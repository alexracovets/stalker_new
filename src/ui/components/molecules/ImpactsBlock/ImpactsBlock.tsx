"use client";

import { Text } from "@components/atoms";

interface ImpactsBlockType {
    impacts?: {
        title: string;
        info: string;
    }[];
};

export const ImpactsBlock = ({ impacts }: ImpactsBlockType) => {
    return (
        <div
            className="flex flex-col gap-y-[2.4rem]"
        >
            {impacts?.map((impact, idx) => {
                return (
                    <div
                        key={idx}
                        className=""
                    >
                        <Text variant="infoPageTitle" asChild="h4">{impact.title}</Text>
                        <Text variant="infoPage">{impact.info}</Text>
                    </div>
                );
            })}
        </div>
    );
};