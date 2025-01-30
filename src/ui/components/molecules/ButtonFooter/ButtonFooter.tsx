"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { ButtonKeyUp } from "@components/molecules";
import { Button } from "@components/atoms";
import { ButtonFooterType } from "@types";
import { cn } from "@utils";

export const ButtonFooter = ({ action, children }: ButtonFooterType) => {
    const router = useRouter();

    const toMainPage = () => {
        router.push("/");
    };

    return (
        <Button
            onClick={action === "to-start" ? toMainPage : () => null}
            className="flex justify-start items-center gap-x-[1.6rem]"
        >
            <ButtonKeyUp action={action} footer>
                {
                    action === "to-start" ?
                        "X" :
                        <div className="flex justify-center items-center">
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
                        </div>
                }
            </ButtonKeyUp>
            <div className="text-[1.8rem] text-pda-light_yellow font-roboto">
                {children}
            </div>
        </Button>
    )
};