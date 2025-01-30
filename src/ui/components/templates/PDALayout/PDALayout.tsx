"use client";

import { Header, Footer, Main, Sidebar, Content } from "@components/organisms";
import { useCheckCategories } from "@/hooks";
import { JustChildren } from "@/types";

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