"use client";

import homeLinks from "@/data/homeLinks.json";
import { Button, HeaderNavBg } from "@components/atoms";
import storePDA from "@/store/storePDA";

export const Navigation = () => {
    const mainSection = storePDA(state => state.mainSection);
    const setMainSection = storePDA(state => state.setMainSection);
    const currentIndex = homeLinks.findIndex(link => link.id === mainSection);

    const prevSection = () => {
        if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + homeLinks.length) % homeLinks.length;
            setMainSection(homeLinks[prevIndex].id);
        } else {
            setMainSection(homeLinks[0].id);
        }
    };

    const nextSection = () => {
        if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % homeLinks.length;
            setMainSection(homeLinks[nextIndex].id);
        } else {
            setMainSection(homeLinks[0].id);
        }
    };

    return (
        <div
            className="relative flex justify-center items-center bg-pda-black border-pda-border border-y-[.1rem] gap-x-[2.8rem]"
        >
            <HeaderNavBg />
            <Button variant="destructive" data-pda-previous onClick={prevSection}>Q</Button>
            {/* <HeaderNavigationLinks /> */}
            <Button variant="destructive" data-pda-next onClick={nextSection}>E</Button>
        </div>
    );
};