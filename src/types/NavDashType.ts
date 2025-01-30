"use client";

import { LinesDashType } from './LinesDashType';

export interface NavDashType {
    isShow: boolean;
    lineStyles: LinesDashType;
    setIsShow: (value: boolean) => void;
    setLineStyles: (value: LinesDashType) => void;
};