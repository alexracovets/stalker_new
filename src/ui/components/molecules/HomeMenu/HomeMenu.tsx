"use client";

import { Logo } from "@components/atoms";
import { HomeNavigation } from "@components/molecules";

export const HomeMenu = () => {

    return (
        <aside className="flex flex-col justify-center items-center w-[51.9rem] min-w-[51.9rem] h-[100dvh] bg-primary-black p-[4rem] gap-y-[2rem]">
            <Logo />
            <HomeNavigation />
        </aside>
    );
};