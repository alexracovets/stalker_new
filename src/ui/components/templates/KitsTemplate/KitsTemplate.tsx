"use client";

import { InfoBlock, TitleBlock, ElementsShowImage, ElementsDetails, ImpactsBlock } from "@components/molecules";
import { ElementsInnerLeft, ElementsInnerRight, ElementsWrapper, CustomScroll, Text } from "@components/atoms";
import { ElementsDataType } from "@/types";

export const KitsTemplate = ({ name, title, info, image, impacts, details }: ElementsDataType) => {
    return (
        <CustomScroll>
            <ElementsWrapper>
                <ElementsInnerLeft>
                    <TitleBlock name={name} title={title} />
                    <InfoBlock infoes={info} />
                    <ImpactsBlock impacts={impacts} />
                </ElementsInnerLeft>
                <ElementsInnerRight>
                    <ElementsShowImage image={image} name={name} variant="secondary" />
                    <ElementsDetails details={details} variant="secondary" />
                </ElementsInnerRight>
            </ElementsWrapper>
        </CustomScroll>
    );
};