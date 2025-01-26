"use client";

import type { Metadata } from "next";

import { calibri, stalker, roboto, roboto_condensed, rethink } from '@/ui/fonts';
import '@/styles/globals.scss';
import { cn } from "@/utils";

export const metadata: Metadata = {
    title: "Stalker 2",
    description: "Stalker 2 - data base",
};

export const DefaultLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    calibri.variable,
                    stalker.variable,
                    roboto_condensed.variable,
                    roboto.variable,
                    rethink.variable,
                    "antialiased bg-main-black"
                )}
            >
                {children}
            </body>
        </html>
    );
};
