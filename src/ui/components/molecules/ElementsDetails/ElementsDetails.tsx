"use client";

import { cn } from "@/utils";
import { AtomImage, Text } from "@components/atoms";

interface ElementsDetailsType {
    details?: {
        name: string;
        value: string;
        image: string;
        valueColor?: string;
    }[];
    variant?: "secondary";
};

export const ElementsDetails = ({ details, variant }: ElementsDetailsType) => {
    return (
        <table
            className="border-collapse border-[.1rem] border-pda-border"
        >
            <tbody>
                {
                    details?.map((detail, idx) => {
                        return (
                            <tr key={idx}
                                className="flex border-collapse border-y-[.1rem] border-pda-border"
                            >
                                <td className={cn(
                                    "w-[23rem] bg-pda-gray flex justify-start items-center gap-x-[.8rem] px-[.4rem] py-[.6rem] border-collapse border-x-[.1rem] border-pda-border",
                                    variant === "secondary" && "w-[21.5rem]"
                                )}>
                                    <AtomImage src={detail.image} alt={detail.name} wrapper="w-[3.2rem] h-[3.2rem]" />
                                    <Text variant="tableValue">
                                        {detail.name}
                                    </Text>
                                </td>
                                <td className={cn(
                                    "w-[15.8rem] flex justify-center items-center",
                                    variant === "secondary" && "w-[17.4rem]"
                                )}>
                                    <Text
                                        variant="tableValue"
                                        className={cn(
                                            detail.valueColor === "green" && "text-pda-green",
                                            detail.valueColor === "red" && "text-pda-red",
                                        )}
                                    >
                                        {detail.value}
                                    </Text>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};