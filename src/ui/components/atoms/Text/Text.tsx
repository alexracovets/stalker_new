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
                namePage: cn(
                    "text-[3.4rem] text-pda-destructive font-[500] font-roboto_condensed mb-[1rem]"
                ),
                infoPageTitle: cn(
                    "text-pda-white text-[2rem] leading-[2.9rem] font-roboto font-[600]"
                ),
                infoPage: cn(
                    "text-pda-white text-[2rem] leading-[2.9rem] font-roboto"
                ),
                titlePage: cn(
                    "text-[1.8rem] text-pda-orange font-roboto mb-[1.2rem]"
                ),
                tableValue: cn(
                    "text-[1.6rem] text-pda-destructive leading-[2.4rem] font-roboto"
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