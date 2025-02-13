"use client";

import { ElementsInnerLeft, ElementsInnerRight, ElementsWrapper } from "@components/atoms";
import { ProtectionBlock, InfoBlock, TitleBlock, ElementsShowImage, ElementsDetails } from "@components/molecules";
import { ElementsDataType } from "@/types";

export const MaskTemplate = ({ name, title, info, image, how_to_get, resistance, details }: ElementsDataType) => {
    return (
        <ElementsWrapper>
            <ElementsInnerLeft>
                <TitleBlock name={name} title={title} />
                <InfoBlock infoes={info} how_to_get={how_to_get} />
                <ProtectionBlock resistance={resistance} />
            </ElementsInnerLeft>
            <ElementsInnerRight>
                <ElementsShowImage image={image} name={name} />
                <ElementsDetails details={details} />
            </ElementsInnerRight>
        </ElementsWrapper>
    )
};