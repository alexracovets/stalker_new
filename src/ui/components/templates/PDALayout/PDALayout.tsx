"use client";

import { JustChildren } from "@/types";
import { Header, Footer, Main } from "@components/organisms";

export const PDALayout = ({ children }: Readonly<JustChildren>) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
};