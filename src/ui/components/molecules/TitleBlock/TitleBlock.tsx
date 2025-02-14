"use client";

import { DashLine, Text } from "@components/atoms";

interface TitleBlockType {
    name: string;
    title: string;
};

export const TitleBlock = ({ name, title }: TitleBlockType) => {
    return (
        <div className="flex flex-col">
            <Text variant="namePage" asChild="h1">
                {name}
            </Text>
            <Text variant="titlePage" asChild="h3">
                {title}
            </Text>
            <DashLine />
        </div>
    );
};