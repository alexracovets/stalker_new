"use client";

import { storePDA, storeSections } from "@store";
import { cn } from "@utils";
import Link from "next/link";

export const HomeNavigation = () => {
    const sections = storeSections(state => state.sections);
    const setIsPlayPDA = storePDA((state) => state.setIsPlay);
    const setIsOpenPDA = storePDA((state) => state.setIsOpen);

    const openPDA = () => {
        setIsOpenPDA(true);
        setIsPlayPDA(true);
    };

    return (
        <ul className="flex flex-col gap-y-[1.6rem] w-full">
            {sections.map((section, idx) => {
                return (
                    <li key={idx}>
                        <Link
                            href={section.route}
                            onClick={openPDA}
                            className={cn(
                                "transition ease-in-out duration-300 w-full cursor-pointer flex justify-center items-center",
                                "relative uppercase text-[3.2rem] text-center text-regular-white font-roboto_condensed font-[600] clip_startBtn h-[4rem]",
                                "after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[url('/png/btn_home.png')] after:bg-cover after:opacity-0",
                                "hover:after:opacity-[1]",
                                "active:after:opacity-[1] active:bg-regular-white active:text-primary-black"
                            )}
                        >
                            {section.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};