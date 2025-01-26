"use client";

import { useRef } from "react";
import Link from "next/link";

import homeLinks from "@/data/homeLinks.json";
import { NavDash } from "@components/atoms";
import storePDA from "@/store/storePDA";
import { useNavDash } from "@/hooks";
import { cn } from "@utils";

export const NavList = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const mainSection = storePDA(state => state.mainSection);
    const { handleMouseEnter } = useNavDash({ menuRef });

    return (
        <nav className="h-full relative" ref={menuRef}>
            <ul className="flex justify-center items-center gap-x-[8rem]">
                {
                    homeLinks.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <Link
                                    id={link.id}
                                    href={link.route}
                                    onMouseEnter={(e) => handleMouseEnter(e)}
                                    className={cn(
                                        "block text-[2.5rem] font-roboto_condensed py-[3.2rem] px-[3rem] cursor-pointer",
                                        "hover:font-[500] hover:text-pda-linksActive",
                                        mainSection === link.id ? "text-pda-linksActive" : "text-pda-links"
                                    )}
                                >
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <NavDash />
        </nav>
    );
};