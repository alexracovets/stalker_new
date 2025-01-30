"use client";

import { MouseEvent } from "react";

export interface NavigationLinkType {
    route: string;
    id: string;
    name: string;
    currentCategory: string;
    setActiveCategory: (e: MouseEvent<HTMLAnchorElement>) => void;
}