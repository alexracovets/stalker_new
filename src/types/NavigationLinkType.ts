"use client";

import { MouseEvent } from "react";

export interface NavigationLinkType {
    route: string;
    id: string;
    name: string;
    currentSection: string;
    setActiveSection: (e: MouseEvent<HTMLAnchorElement>) => void;
}