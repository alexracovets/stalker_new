"use client";

import { Button, HeaderNavBg, NavigationWrapper } from "@components/atoms";
import { NavList } from "@components/molecules";

export const Navigation = () => {
    return (
        <NavigationWrapper>
            <HeaderNavBg />
            <Button variant="destructive" data-pda-previous>Q</Button>
            <NavList />
            <Button variant="destructive" data-pda-next>E</Button>
        </NavigationWrapper>
    );
};