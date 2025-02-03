"use client";

import { Header, Footer, Main, Sidebar, Content } from "@components/organisms";
import { useCheckSection } from "@hooks";
import { JustChildren } from "@types";

export const PDALayout = ({ children }: Readonly<JustChildren>) => {

    useCheckSection();

    return (
        <>
            <Header />
            <Main>
                <Sidebar />
                <Content>
                    {children}
                </Content>
            </Main>
            <Footer />
        </>
    );
};