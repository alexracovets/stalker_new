"use client";

import { Button } from "@components/atoms";
import { ReactNode, useEffect } from "react";

interface ButtonKeyUpProps {
    action: string;
    children: ReactNode;
    onClick: () => void;
}

export const ButtonKeyUp = ({ action, onClick, children }: ButtonKeyUpProps) => {

    useEffect(() => {

    }, [action]);

    return (
        <Button variant="destructive" onClick={onClick}>{children}</Button>
    )
};