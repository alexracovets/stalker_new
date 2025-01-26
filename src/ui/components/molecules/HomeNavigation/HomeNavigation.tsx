"use client"; 

import { storePDA, storeCategories } from "@store";
import { cn } from "@utils";

export const HomeNavigation = () => {
    const categories = storeCategories(state => state.categories);
    const setIsPlayPDA = storePDA((state) => state.setIsPlay);
    const setIsOpenPDA = storePDA((state) => state.setIsOpen);

    const openPDA = () => {
        setIsOpenPDA(true);
        setIsPlayPDA(true);
    };

    return (
        <ul className="flex flex-col gap-y-[1.6rem] w-full">
            {categories.map((category, idx) => {
                return (
                    <li
                        key={idx}
                        data-text={category.name}
                        onClick={openPDA}
                        className={cn(
                            "transition ease-in-out duration-300 before:transition before:ease-in-out before:duration-300 w-full cursor-pointer flex justify-center items-center",
                            "relative uppercase text-[3.2rem] text-center text-regular-white font-roboto_condensed font-[500] clip_startBtn h-[4rem]",
                            "before:content-[attr(data-text)] before:absolute before:left-0 before:top-0 before:text-transparent before:text-center before:font-[600] before:w-full before:min-w-full before:h-full before:bg-regular-transperant",
                            "after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[url('/png/btn_home.png')] after:bg-cover after:opacity-0",
                            "hover:before:bg-regular-white_opacity hover:after:opacity-[1]",
                            "active:text-transparent active:before:text-regular-black active:before:bg-regular-white active:after:opacity-[1]"
                        )}
                    >
                        <span className="block w-full min-w-full leading-[1]">
                            {category.name}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};