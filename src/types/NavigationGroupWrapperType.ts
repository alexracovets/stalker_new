"use client";

import { ReactNode, RefObject } from "react";

export interface NavigationGroupWrapperType {
    menuRef: RefObject<HTMLDivElement>;
    children: ReactNode;
};