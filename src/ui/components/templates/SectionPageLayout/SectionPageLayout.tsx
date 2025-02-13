"use client";

import { TitleBlock, InfoBlock, PageListBlock } from "@components/molecules";
import { Block404, CustomScroll } from "@components/atoms";
import { SectionDataType } from "@/types";

interface SectionPageLayoutProps {
    data: SectionDataType;
}

export const SectionPageLayout = ({ data }: SectionPageLayoutProps) => {
    return (
        <CustomScroll>
            {
                data ? <div
                    className="w-full py-[3.2rem]"
                >
                    <TitleBlock name={data.name} title={data.title} />
                    <InfoBlock infoes={data.info} />
                    <PageListBlock links={data.links} />
                </div > :
                    <Block404 />
            }
        </CustomScroll>
    );
};