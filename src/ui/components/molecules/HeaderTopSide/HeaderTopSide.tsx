"use client";

import { Internet, HeaderPlug, Timer } from "@/ui/components/atoms";

export const HeaderTopSide = () => {

    return (
        <div className="flex justify-center items-center">
            <Internet />
            <HeaderPlug />
            <Timer />
        </div>
    );
};