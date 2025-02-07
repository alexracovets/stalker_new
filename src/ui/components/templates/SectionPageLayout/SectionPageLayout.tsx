"use client";

import Link from "next/link";

import { DashLine } from "@components/atoms";
import { SectionDataType } from "@/types";

interface SectionPageLayoutProps {
    data: SectionDataType;
}

export const SectionPageLayout = ({ data }: SectionPageLayoutProps) => {
    return (
        <>
            {
                data ? <div>
                    < h1 className="text-[3.4rem] text-pda-destructive font-[500] font-roboto_condensed mb-[1rem]" >
                        {data.name}
                    </h1 >
                    <h3 className="text-[1.8rem] text-pda-orange font-roboto mb-[1.2rem]">
                        {data.title}
                    </h3>
                    <DashLine />
                    <div
                        className="flex flex-col w-full text-[2rem] text-pda-white leading-[2.9rem] font-roboto "
                    >
                        {
                            data.info.map((info, idx) => {
                                return (
                                    <p key={idx}>{info}</p>
                                )
                            })
                        }
                    </div>
                    <ul>
                        {
                            data.links.map((link, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link href={link.route}>{link.name}</Link>
                                        <ul>
                                            {
                                                link.sub_links.map((sub_link, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link href={sub_link.route}>{sub_link.name}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div > :
                    <div className="flex flex-grow flex-col items-center justify-center h-full">
                        <h1 className="text-4xl font-bold mb-4">404 - Сторінку не знайдено</h1>
                        <p className="mb-4">Вибачте, але такої сторінки не існує.</p>
                    </div>
            }
        </>
    );
};