"use client";

import { HomeMenu } from "@components/molecules";
import { HomeScreenWrapper, HomeVideo } from "@components/atoms";

export const HomeScreen = () => {
    return (
        <HomeScreenWrapper>
            <HomeMenu />
            <HomeVideo />
        </HomeScreenWrapper>
    );
};