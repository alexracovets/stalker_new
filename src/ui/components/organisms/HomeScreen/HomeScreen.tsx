"use client";

import { HomeMenu } from "@components/molecules";
import { HomeVideo } from "@components/atoms";

export const HomeScreen = () => {
    return (
        <main className="flex justify-between">
            <HomeMenu />
            <HomeVideo />
        </main>
    );
};