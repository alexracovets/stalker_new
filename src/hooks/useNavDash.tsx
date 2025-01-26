"use client";

import { useCallback, RefObject, MouseEvent } from "react";

import { storeNavDash } from "@store";

interface NavDashProps {
    menuRef: RefObject<HTMLDivElement>;
};

export const useNavDash = ({ menuRef }: NavDashProps) => {
    const setIsShow = storeNavDash((state) => state.setIsShow);
    const setLineStyles = storeNavDash((state) => state.setLineStyles);

    const handleMouseEnter = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
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

    return { handleMouseEnter };
};