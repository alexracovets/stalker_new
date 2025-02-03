"use client";

import { ReactNode } from "react";

export interface NavigationGroupLinksType {
    setCurrentSection: () => void;
    children: ReactNode;
}