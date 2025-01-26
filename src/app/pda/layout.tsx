"use client";

import { PDALayout } from "@/ui/components/templates";
import { JustChildren } from "@/types";

const PDA = ({ children }: JustChildren) => {
    return (
        <PDALayout>
            {children}
        </PDALayout>
    );
};

export default PDA;