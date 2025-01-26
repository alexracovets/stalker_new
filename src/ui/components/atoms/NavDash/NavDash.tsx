"use client";

import Image from "next/image";
import { cn } from "@utils";

import { storeNavDash } from "@store";
import { useEffect } from "react";

interface NavDashProps {
    setCurrentCategory: () => void;
};

export const NavDash = ({ setCurrentCategory }: NavDashProps) => {
    const isShow = storeNavDash((state) => state.isShow);
    const lineStyles = storeNavDash((state) => state.lineStyles);
    
    useEffect(() => {
        setCurrentCategory();
    }, [setCurrentCategory]);

    return (
        <div
            className={cn(
                "relative transition-opacity ease-out duration-300 select-none pointer-events-none",
                isShow ? "opacity-1" : "opacity-0"
            )}
        >
            <div
                className={cn(
                    "absolute bottom-[0] h-[.15rem] bg-custom-gradient transition-all ease-out duration-300 flex justify-center items-center"
                )}
                style={lineStyles.underline}
            >
                <div className="relative w-full h-full flex justify-center items-end">
                    <div className="relative w-[8.5rem] h-[2.5rem]">
                        <Image src="/pda/line_dot.png" fill alt="dot" sizes="100%" priority className="object-cover" />
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-[.15rem] h-[.3rem] bg-custom-gradient_second transition-all ease-out duration-300 flex justify-center items-center"
                style={lineStyles.shortline}
            >
                <div className="relative w-full h-full flex justify-center items-end">
                    <div className="relative w-[4.4rem] h-[1.7rem] blur-[1rem]">
                        <Image src="/pda/line_dot_small.png" fill alt="dot" sizes="100%" priority className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};