"use client";

import { useCallback, RefObject, MouseEvent } from "react";

import { storeCategories, storeNavDash } from "@store";

interface NavDashProps {
    menuRef: RefObject<HTMLDivElement>;
};

export const useNavDash = ({ menuRef }: NavDashProps) => {
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
    }, []);

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