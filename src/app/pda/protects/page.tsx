"use client";

import { DashLine } from "@components/atoms";
import Link from "next/link";

import protectsData from "@data/pages/protects.json";

export default function Protects() {
    return (
        <div>
            <h1 className="text-[3.4rem] text-pda-destructive font-[500] font-roboto_condensed mb-[1rem]">
                {protectsData.section_title}
            </h1>
            <h3 className="text-[1.8rem] text-pda-orange font-roboto mb-[1.2rem]">
                {protectsData.section_sub_title}
            </h3>
            <DashLine />
            <div
                className="flex flex-col w-full text-[2rem] text-pda-white leading-[2.9rem] font-roboto "
            >
                {
                    protectsData.section_info.map((info, idx) => {
                        return (
                            <p key={idx}>{info}</p>
                        )
                    })
                }
            </div>
            <ul>
                <li>
                    <Link href={'/pda/protects/armors'}>Костюми</Link>
                    <ul>

                    </ul>
                </li>
                <li>
                    <Link href={'/pda/protects/masks'}>Маски</Link>
                    <ul>

                    </ul>
                </li>
                <li>
                    <Link href={'/pda/protects/exos'}>Екзоскилети</Link>
                    <ul>

                    </ul>
                </li>
                <li>
                    <Link href={'/pda/protects/kits'}>Медицина</Link>
                    <ul>

                    </ul>
                </li>
            </ul>

        </div>
    );
}