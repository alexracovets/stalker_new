"use client";

import { ProtectionBlock, InfoBlock, TitleBlock, ElementsShowImage, ElementsDetails } from "@components/molecules";
import { ElementsInnerLeft, ElementsInnerRight, ElementsWrapper, CustomScroll } from "@components/atoms";
import { ElementsDataType } from "@/types";

export const ArmorTemplate = ({ name, info, title, image, how_to_get, resistance, details }: ElementsDataType) => {
    return (
        <CustomScroll>
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
        </CustomScroll>
    );
};