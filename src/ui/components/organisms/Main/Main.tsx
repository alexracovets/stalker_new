"use client";

import { MainWrapper } from "@components/atoms";
import { JustChildren } from "@types";

export const Main = ({ children }: JustChildren) => {
    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    );
};