"use client";

import { DefaultLayout } from "@components/templates";
import { JustChildren } from "@/types";

export default function RootLayout({ children }: Readonly<JustChildren>) {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  );
};