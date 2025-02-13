"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { createElement } from "react";

import { cn } from "@utils";

interface TextProps extends VariantProps<typeof textVariants> {
    children: React.ReactNode;
    className?: string;
    asChild?: keyof JSX.IntrinsicElements;
}

const textVariants = cva(
    "font-montserrat",
    {
        variants: {
            variant: {
                default: "",
                info: cn(
                    "uppercase font-roboto_condensed text-[2.8rem] text-primary-dark_gray font-[600]"
                ),
                tableValue: cn(
                    "text-[1.6rem] text-pda-destructive"
                )
            }
        },
        defaultVariants: {
            variant: "default"
        },
    }
);

export const Text = ({ children, className, variant, asChild = "p" }: TextProps) => {
    return createElement(
        asChild,
        { className: cn(textVariants({ variant, className })) },
        children
    );
};