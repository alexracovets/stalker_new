"use client";

import { useRouter } from "next/navigation";

import { ButtonFooter } from "@components/molecules";
import { Button } from "@components/atoms";

export const FooterButtonGroup = () => {
    const router = useRouter();

    const toMainPage = () => {
        router.push("/");
    };

    return (
        <>
            <div
                data-to-main-page
                onClick={toMainPage}
                className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]"
            >
                <Button variant="destructive">X</Button>
                <div className="text-[1.8rem] text-pda-light_yellow font-roboto">
                    Вийти в Головне меню
                </div>
            </div>
            <div className="flex items-center gap-x-[12rem]">
                <ButtonFooter action="prev-item" name="Попереднє" />
                <ButtonFooter action="next-item" name="Наступне" />
            </div>
        </>
    )
};