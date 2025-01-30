"use client";

import { ReactNode } from "react";

export interface NavigationGroupLinksType {
    setCurrentCategory: () => void;
    children: ReactNode;
}