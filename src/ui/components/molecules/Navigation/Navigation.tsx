"use client";

import { HeaderNavBg, NavigationWrapper } from "@components/atoms";
import { ButtonKeyUp, NavList } from "@components/molecules";

export const Navigation = () => {

    const prevCategory = () => {

    };
    const nextCategory = () => {

    };

    return (
        <NavigationWrapper>
            <HeaderNavBg />
            <ButtonKeyUp action="prev-category" onClick={prevCategory}>Q</ButtonKeyUp>
            <NavList />
            <ButtonKeyUp action="next-category" onClick={nextCategory}>E</ButtonKeyUp>
        </NavigationWrapper>
    );
};