"use client";

import { Logo, Text } from "@components/atoms";
import { HomeNavigation } from "@components/molecules";

export const HomeMenu = () => {

    return (
        <aside className="flex flex-col justify-center items-center w-[51.9rem] min-w-[51.9rem] h-[100dvh] bg-primary-black p-[4rem] gap-y-[4.8rem]">
            <div
                className="flex flex-col justify-center items-center w-full gap-y-[1.6rem]"
            >
                <Logo />
                <Text variant='info' asChild="h3">Інформація</Text>
            </div>
            <HomeNavigation />
        </aside>
    );
};