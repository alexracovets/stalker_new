"use client";

import { ContentBorder, ContentWrapper } from "@components/atoms";
import { JustChildren } from "@types";

export const Content = ({ children }: JustChildren) => {
    return (
        <ContentWrapper>
            <ContentBorder />
            {children}
        </ContentWrapper>
    );
}