"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import { createElement } from "react";

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
                    "uppercase text-roboto_condensed text-[2.8rem] text-primary-dark_gray font-[600]"
                ),

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
        {
            className: cn(textVariants({ variant, className }))
        },
        children
    );
};