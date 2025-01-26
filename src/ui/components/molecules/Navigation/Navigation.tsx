"use client";

import { Button, HeaderNavBg } from "@components/atoms";
import { NavList } from "@components/molecules";

export const Navigation = () => {
    return (
        <div
            className="relative flex justify-center items-center bg-pda-black border-pda-border border-y-[.1rem] gap-x-[2.8rem] z-[1]"
        >
            <HeaderNavBg />
            <Button variant="destructive" data-pda-previous>Q</Button>
            <NavList />
            <Button variant="destructive" data-pda-next>E</Button>
        </div>
    );
};