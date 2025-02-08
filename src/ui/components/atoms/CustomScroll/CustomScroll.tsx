"use client";

import Scrollbars from "react-custom-scrollbars-2";
import { useEffect, useState } from "react";

import { JustChildren } from "@/types";

export const CustomScroll = ({ children }: JustChildren) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }


    return (
        <>
            <Scrollbars
                className="flex flex-grow h-full transition-all ease-in-out duration-1000"
                hidden
                autoHide
                renderThumbVertical={thumb}
                renderTrackVertical={track}
                hideTracksWhenNotNeeded
            >
                {children}
            </Scrollbars>
        </>
    );
};

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