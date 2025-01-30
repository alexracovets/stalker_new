"use client";
 
import { JustChildren } from "@types";

import { calibri, stalker, roboto, roboto_condensed, rethink } from '@/ui/fonts';
import { cn } from "@/utils"; 

import '@/styles/globals.scss';

export const DefaultLayout = ({ children }: Readonly<JustChildren>) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    calibri.variable,
                    stalker.variable,
                    roboto_condensed.variable,
                    roboto.variable,
                    rethink.variable,
                    "antialiased bg-main-black text-primary-main"
                )}
            >
                {children}
            </body>
        </html>
    );
};
