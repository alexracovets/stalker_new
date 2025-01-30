import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@utils";

const buttonVariants = cva("flex justify-center items-center cursor-pointer text-primary-mainBlack", {
    variants: {
        variant: {
            default: "",
            destructive: cn(
                "text-[2.5rem] font-rethink font-[800] w-[3.6rem] h-[3.6rem] border-[.1rem] border-primary-black rounded-[.4rem] bg-pda-destructive bg-[url('/png/btn_destructive.png')] bg-contain sepia leading-[0]"
            ),
            outline: "",
            secondary: "",
            ghost: "",
            link: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };