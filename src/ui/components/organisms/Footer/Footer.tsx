"use client";

import { FooterBorder, FooterWrapper } from "@components/atoms";
import { FooterButtonGroup } from "@components/molecules";

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterBorder />
            <FooterButtonGroup />
        </FooterWrapper >
    );
};