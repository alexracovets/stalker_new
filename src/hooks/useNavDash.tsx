"use client";

import { useCallback, MouseEvent } from "react";

import { storeCategories, storeNavDash } from "@store";
import { NavDashRefType } from "@types";

export const useNavDash = ({ menuRef }: NavDashRefType) => {
    const setIsShow = storeNavDash((state) => state.setIsShow);
    const setLineStyles = storeNavDash((state) => state.setLineStyles);
    const currentCategory = storeCategories((state) => state.currentCategory);

    const setActiveCategory = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
        const linkRect = e.currentTarget.getBoundingClientRect();
        const menuRect = menuRef.current?.getBoundingClientRect();
        const spanRect = e.currentTarget.querySelector('span')?.getBoundingClientRect();

        if (menuRect && spanRect) {
            setIsShow(true);

            setLineStyles({
                underline: {
                    left: `${linkRect.left - menuRect.left}px`,
                    width: `${linkRect.width}px`
                },
                shortline: {
                    left: `${spanRect.left - menuRect.left}px`,
                    width: `${spanRect.width}px`
                }
            });
        }
    }, [menuRef, setIsShow, setLineStyles]);

    const setCurrentCategory = useCallback(() => {
        const categoryElement = document.getElementById(currentCategory);
        const menuRect = menuRef.current?.getBoundingClientRect();
        const spanRect = categoryElement?.querySelector('span')?.getBoundingClientRect();

        if (menuRect && categoryElement && spanRect) {
            const linkRect = categoryElement.getBoundingClientRect();
            setIsShow(true);

            setLineStyles({
                underline: {
                    left: `${linkRect.left - menuRect.left}px`,
                    width: `${linkRect.width}px`
                },
                shortline: {
                    left: `${spanRect.left - menuRect.left}px`,
                    width: `${spanRect.width}px`
                }
            });
        }
    }, [currentCategory, menuRef, setIsShow, setLineStyles]);

    return { setActiveCategory, setCurrentCategory };
};