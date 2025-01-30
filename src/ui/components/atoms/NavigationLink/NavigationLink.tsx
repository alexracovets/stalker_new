"use client";

import Link from "next/link";

import { cn } from "@utils";

interface NavItemType {
    route: string;
    id: string;
    name: string;
    currentCategory: string;
    setActiveCategory: (e: any) => void;
}

export const NavigationLink = ({ route, id, name, currentCategory, setActiveCategory }: NavItemType) => {
    return (
        <li>
            <Link
                id={id}
                href={route}
                onMouseEnter={(e) => setActiveCategory(e)}
                className={cn(
                    "block text-[2.5rem] font-roboto_condensed py-[3.2rem] px-[3rem] cursor-pointer",
                    "hover:font-[500] hover:text-pda-linksActive",
                    currentCategory === id ? "text-pda-linksActive" : "text-pda-links"
                )}
            >
                <span>{name}</span>
            </Link>
        </li>
    );
};