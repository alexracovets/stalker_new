"use client";

import Link from "next/link";

import { NavigationLinkType } from "@types";
import { cn } from "@utils";

export const NavigationLink = ({ route, id, name, currentSection, setActiveSection }: NavigationLinkType) => {
    return (
        <li>
            <Link
                id={id}
                href={route}
                onMouseEnter={(e) => setActiveSection(e)}
                className={cn(
                    "block text-[2.5rem] font-roboto_condensed py-[3.2rem] px-[3rem] cursor-pointer",
                    "hover:font-[500] hover:text-pda-linksActive",
                    currentSection === id ? "text-pda-linksActive" : "text-pda-links"
                )}
            >
                <span>{name}</span>
            </Link>
        </li>
    );
};