"use client";

import { Text } from "@components/atoms";
import { cn } from "@utils";

interface InfoBlockType {
    infoes: string[];
};

export const InfoBlock = ({ infoes }: InfoBlockType) => {
    return (
        <div
            className={cn(
                "flex flex-col w-full mb-[9.8rem] gap-y-[1.5rem]"
            )}
        >
            {infoes.map((info: string, idx: number) => {
                return (
                    <Text key={idx} variant="infoPage">{info}</Text>
                )
            })}
        </div>
    );
};