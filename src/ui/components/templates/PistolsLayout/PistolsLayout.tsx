"use client";

import { InfoBlock, TitleBlock, ElementsShowImage, ElementsDetails, ProtectionBlock } from "@components/molecules";
import { ElementsInnerLeft, ElementsInnerRight, ElementsWrapper, CustomScroll } from "@components/atoms";
import { ElementsDataType } from "@/types";

export const PistolsLayout = ({ name, title, info, resistance, image, details }: ElementsDataType) => {
    return (
        <CustomScroll>
            <ElementsWrapper>
                <ElementsInnerLeft>
                    <TitleBlock name={name} title={title} />
                    <ElementsShowImage image={image} name={name} variant="pistols" />
                    <InfoBlock infoes={info} />
                    <ProtectionBlock resistance={resistance} />
                </ElementsInnerLeft>
                <ElementsInnerRight>
                    <ElementsDetails details={details} variant="secondary" />
                </ElementsInnerRight>
            </ElementsWrapper>
        </CustomScroll>
    );
};