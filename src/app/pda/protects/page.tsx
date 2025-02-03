"use client";

import { DashLine } from "@components/atoms";
import Link from "next/link";

export default function Protects() {
    return (
        <div>
            <h1 className="text-[3.4rem] text-pda-destructive font-[500] font-roboto_condensed mb-[1rem]">
                Захист
            </h1>
            <h3 className="text-[1.8rem] text-pda-orange font-roboto mb-[1.2rem]">
                Категорії
            </h3>
            <DashLine />
            <div
                className="flex flex-col w-full text-[2rem] text-pda-white leading-[2.9rem] font-roboto "
            >
                <p>Опис про Захист _коротка інфо_</p>
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