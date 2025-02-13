"use client";

import { ArmorProtection, InfoBlock, TitleBlock } from "@components/molecules";
import { AtomImage, Text } from "@components/atoms";
import { ElementsDataType } from "@/types";

interface TestPageType {
    data: ElementsDataType;
};

export const ArmorTemplate = ({ data }: TestPageType) => {
    return (
        <div
            className="flex justify-between gap-x-[6.4rem] py-[3.2rem]"
        >
            <div className="flex flex-col flex-grow">
                <TitleBlock name={data.name} title={data.title} />
                <InfoBlock infoes={data.info} how_to_get={data.how_to_get} />
                <ArmorProtection resistance={data.resistance} />
            </div>
            <div
                className="flex flex-col pr-[12.7rem]"
            >
                <AtomImage
                    wrapper={"w-[38.8rem] h-[38.8rem]"}
                    src={data.image}
                    alt={data.name}
                />
                <table
                    className="border-collapse border-[.1rem] border-pda-border"
                >
                    <tbody>
                        {
                            data.details.map((detail, idx) => {
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
            </div>
        </div >
    );
};