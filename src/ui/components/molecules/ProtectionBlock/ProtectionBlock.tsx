"use client";

import { ProtectValue } from "../ProtectValue";

interface ProtectionBlockProps {
    resistance: {
        name: string;
        value: number;
        image: string;
    }[];
};

export const ProtectionBlock = ({ resistance }: ProtectionBlockProps) => {

    return (
        <table
            className="w-full text-[1.6rem] text-destructive font-roboto border-collapse border-[.1rem] border-pda-border"
        >
            <tbody>
                {
                    resistance.map((resistance, idx) => {
                        return (
                            <ProtectValue key={idx} name={resistance.name} value={resistance.value} image={resistance.image} />
                        )
                    })
                }
            </tbody>
        </table>
    );
};