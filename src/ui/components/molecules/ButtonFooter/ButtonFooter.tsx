"use client";

import Image from "next/image";

import { ButtonKeyUp } from "@components/molecules";
import { cn } from "@utils";

interface ButtonFooterProps {
    action: "prev-item" | "next-item";
    name: string;
};

export const ButtonFooter = ({ action, name }: ButtonFooterProps) => {

    return (
        <div className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]">
            <ButtonKeyUp action={action}>
                <div className="relative w-[2rem] h-full">
                    <Image
                        src="/svg/arrow_destructive.svg"
                        fill
                        alt="bottom"
                        className={cn(
                            "object-contain",
                            action === "prev-item" && "rotate-180"
                        )}
                    />
                </div>
            </ButtonKeyUp>
            <div className="text-[1.8rem] text-pda-light_yellow font-roboto">
                {name}
            </div>
        </div>
    )
};