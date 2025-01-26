"use client";

import { HeaderWrapper } from "@components/atoms";
import { Navigation, HeaderTopSide } from "@components/molecules";

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTopSide />
            <Navigation />
        </HeaderWrapper >
    );
};