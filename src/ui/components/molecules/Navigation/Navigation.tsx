"use client";

import { HeaderNavBg, NavigationWrapper } from "@components/atoms";
import { ButtonKeyUp, NavigationGroup } from "@components/molecules";

export const Navigation = () => {

    return (
        <NavigationWrapper>
            <HeaderNavBg />
            <ButtonKeyUp action="prev-category">Q</ButtonKeyUp>
            <NavigationGroup />
            <ButtonKeyUp action="next-category">E</ButtonKeyUp>
        </NavigationWrapper>
    );
};