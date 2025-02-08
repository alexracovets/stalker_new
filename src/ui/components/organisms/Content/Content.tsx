"use client";

import { ContentBorder, ContentWrapper } from "@components/atoms";
import { JustChildren } from "@types";
import { CustomScroll } from "@components/atoms";

export const Content = ({ children }: JustChildren) => {
    return (
        <ContentWrapper>
            <ContentBorder />
            <CustomScroll>
                {children}
            </CustomScroll>
        </ContentWrapper>
    );
}