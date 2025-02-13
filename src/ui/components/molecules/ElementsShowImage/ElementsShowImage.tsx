"use client";

import { AtomImage } from "@components/atoms";

interface ElementsShowImageType {
    image: string;
    name: string;
};

export const ElementsShowImage = ({ image, name }: ElementsShowImageType) => {
    return (
        <AtomImage
            wrapper={"w-[38.8rem] h-[38.8rem]"}
            src={image}
            alt={name}
        />
    );
};