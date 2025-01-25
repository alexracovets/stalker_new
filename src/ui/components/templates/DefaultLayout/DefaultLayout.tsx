"use client";

import { calibri, stalker, roboto, roboto_condensed, rethink } from '@/ui/fonts';

import '@/styles/globals.scss';

export const DefaultLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
            <body
                className={`
                    ${calibri.variable} 
                    ${stalker.variable} 
                    ${roboto_condensed.variable} 
                    ${roboto.variable} 
                    ${rethink.variable} 
                    antialiased bg-main-black`}
            >
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
};
