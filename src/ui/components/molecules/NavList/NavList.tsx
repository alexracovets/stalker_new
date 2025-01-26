"use client";

import { useRef } from "react";
import Link from "next/link";

import { storeCategories } from "@store";
import { NavDash } from "@components/atoms";
import { useNavDash } from "@/hooks";
import { cn } from "@utils";

export const NavList = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const currentCategory = storeCategories(state => state.currentCategory);
    const categories = storeCategories(state => state.categories);
    const { handleMouseEnter } = useNavDash({ menuRef });

    return (
        <nav className="h-full relative" ref={menuRef}>
            <ul className="flex justify-center items-center gap-x-[8rem]">
                {
                    categories.map((category, idx) => {
                        return (
                            <li key={idx}>
                                <Link
                                    id={category.id}
                                    href={category.route}
                                    onMouseEnter={(e) => handleMouseEnter(e)}
                                    className={cn(
                                        "block text-[2.5rem] font-roboto_condensed py-[3.2rem] px-[3rem] cursor-pointer",
                                        "hover:font-[500] hover:text-pda-linksActive",
                                        currentCategory === category.id ? "text-pda-linksActive" : "text-pda-links"
                                    )}
                                >
                                    <span>{category.name}</span>
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