"use client";

import { AtomImage, Text } from "@components/atoms";

interface ElementsDetailsType {
    details: {
        name: string;
        value: string;
        image: string;
    }[];
};

export const ElementsDetails = ({ details }: ElementsDetailsType) => {
    return (
        <table
            className="border-collapse border-[.1rem] border-pda-border"
        >
            <tbody>
                {
                    details.map((detail, idx) => {
                        return (
                            <tr key={idx}
                                className="flex border-collapse border-y-[.1rem] border-pda-border"
                            >
                                <td className="w-[23rem] bg-pda-gray flex justify-start items-center gap-x-[.8rem] px-[.4rem] py-[.6rem] border-collapse border-x-[.1rem] border-pda-border">
                                    <AtomImage src={detail.image} alt={detail.name} wrapper="w-[3.2rem] h-[3.2rem]" />
                                    <Text variant="tableValue">
                                        {detail.name}
                                    </Text>
                                </td>
                                <td className="w-[15.8rem] flex justify-center items-center">
                                    <Text variant="tableValue">
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