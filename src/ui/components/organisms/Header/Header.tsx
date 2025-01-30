"use client";

import { HeaderWrapper, HeaderBorder } from "@components/atoms";
import { Navigation, HeaderTopSide } from "@components/molecules";

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTopSide />
            <Navigation />
            <HeaderBorder />
        </HeaderWrapper >
    );
};