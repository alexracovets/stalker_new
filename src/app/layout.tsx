"use client";

import { ReactNode } from "react";

import { DefaultLayout } from "@components/templates";

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  );
};