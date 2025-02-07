"use client";

import Image from "next/image";

interface ProtectValueProps {
    name: string;
    value: number;
    image: string;
};

export const ProtectValue = ({ name, value, image }: ProtectValueProps) => {
    return (
        <tr
            className="flex w-full border-collapse border-y-[.1rem] border-pda-border"
        >
            <td
                className="flex items-center w-[15rem] h-full px-[.4rem] py-[.6rem] gap-x-[.8rem] bg-pda-gray border-collapse border-x-[.1rem] border-pda-border"
            >
                <div
                    className="relative w-[3.2rem] h-[3.2rem]"
                >
                    <Image src={image} alt="termal" fill className="object-cover" />
                </div>
                <span>
                    {name}
                </span>
            </td>
            <td
                className="flex justify-center items-center w-[6.6rem] px-[2.2rem] py-[1rem] border-collapse border-x-[.1rem] border-pda-border"
            >
                {value}
            </td>
            <td
                className="flex-grow px-[1.3rem] py-[1.7rem] border-collapse border-x-[.1rem] border-pda-border"
            >
                <div
                    className="flex w-full bg-pda-value_bg h-[1rem]"
                >
                    <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border">
                        <div
                            className="h-full bg-pda-value border-value"
                            style={{
                                width: value < 1 ? `${value * 100}%` : "100%",
                                borderWidth: value === 0 ? "0" : ".1rem"
                            }}
                        />
                    </div>
                    <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border">
                        <div
                            className="h-full bg-pda-value border-value"
                            style={{
                                width: value <= 1 ? "0%" : value > 1 && value < 2 ? `${(value - 1) * 100}%` : "100%",
                                borderWidth: value <= 1 ? "0" : ".1rem"
                            }}
                        />
                    </div>
                    <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border">
                        <div
                            className="h-full bg-pda-value border-value"
                            style={{
                                width: value <= 2 ? "0%" : value > 1 && value < 3 ? `${(value - 2) * 100}%` : "100%",
                                borderWidth: value <= 2 ? "0" : ".1rem"
                            }}
                        />
                    </div>
                    <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border">
                        <div
                            className="h-full bg-pda-value border-value"
                            style={{
                                width: value <= 3 ? "0%" : value > 1 && value < 4 ? `${(value - 3) * 100}%` : "100%",
                                borderWidth: value <= 3 ? "0" : ".1rem"
                            }}
                        />
                    </div>
                    <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border" >
                        <div
                            className="h-full bg-pda-value border-value"
                            style={{
                                width: value <= 4 ? "0%" : value > 1 && value < 5 ? `${(value - 4) * 100}%` : "100%",
                                borderWidth: value <= 4 ? "0" : ".1rem"
                            }}
                        />
                    </div>
                </div>
            </td>
        </tr>
    );
};