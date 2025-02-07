"use client";

import { ProtectValue } from "../ProtectValue";

interface ArmorProtectionProps {
    resistance: {
        name: string;
        value: number;
        image: string;
    }[];
};

export const ArmorProtection = ({ resistance }: ArmorProtectionProps) => {

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