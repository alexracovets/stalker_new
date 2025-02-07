"use client";

import Scrollbars from "react-custom-scrollbars-2";
import { useEffect, useState } from "react";
import Image from "next/image";

import { ArmorProtection } from "@components/molecules";
import { DashLine } from "@components/atoms";
import { ElementsDataType } from "@/types";

const thumb = () => {
    return (
        <div
            className="transition-opacity ease-in-out duration-1000"
            style={{
                backgroundColor: "#E6981C",
                borderRadius: "2px",
                width: "2px",
            }}
        />
    );
}
const track = () => {
    return (
        <div
            className="transition-opacity ease-in-out duration-1000"
            style={{
                backgroundColor: "#1C1C1C",
                borderRadius: "2px",
                width: "2px",
                right: "0",
                top: "0",
                position: "absolute",
                height: "100%",
            }}
        />
    );
}

interface TestPageType {
    data: ElementsDataType;
}

export const TestPage = ({ data }: TestPageType) => {
    const [isMounted, setIsMounted] = useState(false);
    console.log(data)
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Scrollbars
            className="flex flex-grow h-full transition-all ease-in-out duration-1000"
            hidden
            autoHide
            renderThumbVertical={thumb}
            renderTrackVertical={track}
            hideTracksWhenNotNeeded
        >
            <div
                className="flex justify-between gap-x-[6.4rem] py-[3.2rem]"
            >
                <div className="flex flex-col flex-grow">
                    <div className="flex flex-col">
                        <h1 className="text-[3.4rem] text-pda-destructive font-[500] font-roboto_condensed mb-[1rem]" >
                            {data.name}
                        </h1>
                        <h3 className="text-[1.8rem] text-pda-orange font-roboto mb-[1.2rem]">
                            {data.title}
                        </h3>
                        <DashLine />
                    </div>
                    <div
                        className="flex flex-col w-full mb-[9.8rem]"
                    >
                        {data.info.map((info: string, idx: number) => {
                            return (
                                <p
                                    key={idx}
                                    className="text-pda-white text-[2rem] leading-[2.9rem] font-roboto"
                                >
                                    {info}
                                </p>
                            )
                        })}
                    </div>
                    <ArmorProtection resistance={data.resistance} />
                </div>
                <div
                    className="flex flex-col pr-[12.7rem]"
                >
                    <div
                        className="relative w-[38.8rem] h-[38.8rem]"
                    >
                        <Image src={data.image} alt={data.name} fill className="object-cover" />
                    </div>
                </div>
            </div >
        </Scrollbars>
    );
};