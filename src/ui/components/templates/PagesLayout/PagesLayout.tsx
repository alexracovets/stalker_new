"use client";

import { Main, Sidebar, Content } from "@components/organisms";
import { JustChildren } from "@types";

export const PagesLayout = ({ children }: JustChildren) => {
    return (
        <Main>
            <Sidebar />
            <Content>
                {children}
            </Content>
        </Main>
    );
}