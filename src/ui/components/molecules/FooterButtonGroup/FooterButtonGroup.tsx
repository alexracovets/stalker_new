"use client";

import { ButtonFooter } from "@components/molecules";

export const FooterButtonGroup = () => {

    return (
        <>
            <div className="flex justify-start items-center gap-x-[1.6rem]  bg-footer p-[2rem]">
                <ButtonFooter action="to-start">
                    Вийти в Головне меню
                </ButtonFooter>
            </div>
            <div className="flex items-center gap-x-[12rem]">
                <ButtonFooter action="prev-item">
                    Попереднє
                </ButtonFooter>
                <ButtonFooter action="next-item" >
                    Наступне
                </ButtonFooter>
            </div>
        </>
    )
};