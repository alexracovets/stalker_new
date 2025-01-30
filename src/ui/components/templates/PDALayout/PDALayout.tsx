"use client";

import { useCheckCategories } from "@/hooks";
import { JustChildren } from "@/types";
import { Header, Footer, Main, Sidebar, Content } from "@components/organisms";

export const PDALayout = ({ children }: Readonly<JustChildren>) => {

    useCheckCategories();

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