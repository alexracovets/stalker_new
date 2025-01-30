"use client";

import { JustChildren } from "@types";

export const HeaderTopWrapper = ({ children }: JustChildren) => {
    return (
        <div className="flex justify-center items-center">
            {children}
        </div>
    );
};