"use client";

import { useCheckCategories } from "@/hooks";
import { JustChildren } from "@/types";
import { Header, Footer, Main } from "@components/organisms";

export const PDALayout = ({ children }: Readonly<JustChildren>) => {

    useCheckCategories();

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