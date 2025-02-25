"use client";

import { InfoBlock, TitleBlock, ElementsShowImage, ElementsDetails, ProtectionBlock, HowToGet, AttachmentsBlock } from "@components/molecules";
import { ElementsInnerLeft, ElementsInnerRight, ElementsWrapper, CustomScroll } from "@components/atoms";
import { ElementsDataType } from "@/types";

export const PistolsLayout = ({ name, title, info, resistance, how_to_get, image, details, attachments }: ElementsDataType) => {
    console.log(attachments)
    return (
        <CustomScroll>
            <ElementsWrapper>
                <ElementsInnerLeft>
                    <TitleBlock name={name} title={title} />
                    <ElementsShowImage image={image} name={name} variant="pistols" />
                    <InfoBlock infoes={info} />
                    <ProtectionBlock resistance={resistance} />
                </ElementsInnerLeft>
                <ElementsInnerRight variant="pistols">
                    <HowToGet how_to_get={how_to_get} />
                    <AttachmentsBlock {...attachments} />
                    <ElementsDetails details={details} variant="secondary" />
                </ElementsInnerRight>
            </ElementsWrapper>
        </CustomScroll>
    );
};