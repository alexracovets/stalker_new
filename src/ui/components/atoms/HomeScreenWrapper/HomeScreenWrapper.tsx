"use client";

import { JustChildren } from "@types";

export const HomeScreenWrapper = ({ children }: JustChildren) => {
    return (
        <main className="flex justify-between">
            {children}
        </main>
    );
};