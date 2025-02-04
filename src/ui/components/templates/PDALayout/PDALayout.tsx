"use client";

import { Header, Footer } from "@components/organisms";
import { useCheckSection } from "@hooks";
import { JustChildren } from "@types";

export const PDALayout = ({ children }: Readonly<JustChildren>) => {

    useCheckSection();

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};