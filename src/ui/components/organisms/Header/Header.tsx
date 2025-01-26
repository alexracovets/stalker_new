"use client";

import { HeaderWrapper, HeaderPlug } from "@components/atoms";
import { Internet, Navigation, Timer } from "@components/molecules";

export const Header = () => {
    return (
        <HeaderWrapper>
            <div className="flex justify-center items-center">
                <Internet />
                <HeaderPlug />
                <Timer />
            </div>
            <Navigation />
        </HeaderWrapper>
    );
};