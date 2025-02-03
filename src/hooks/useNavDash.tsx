"use client";

import { useCallback, MouseEvent } from "react";

import { storeSections, storeNavDash } from "@store";
import { NavDashRefType } from "@types";

export const useNavDash = ({ menuRef }: NavDashRefType) => {
    const setIsShow = storeNavDash((state) => state.setIsShow);
    const setLineStyles = storeNavDash((state) => state.setLineStyles);
    const currentSection = storeSections((state) => state.currentSection);

    const setActiveSection = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
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

    const setCurrentSection = useCallback(() => {
        const sectionElement = document.getElementById(currentSection);
        const menuRect = menuRef.current?.getBoundingClientRect();
        const spanRect = sectionElement?.querySelector('span')?.getBoundingClientRect();

        if (menuRect && sectionElement && spanRect) {
            const linkRect = sectionElement.getBoundingClientRect();
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
    }, [currentSection, menuRef, setIsShow, setLineStyles]);

    return { setActiveSection, setCurrentSection };
};