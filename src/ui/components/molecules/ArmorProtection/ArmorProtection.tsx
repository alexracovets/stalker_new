"use client";

import Image from "next/image";

interface ArmorProtectionProps {
    resistance: {
        thermal: number;
        electricity: number;
        chemicals: number;
        radiation: number;
        psi: number;
        physical: number;
    };
};

export const ArmorProtection = ({ resistance }: ArmorProtectionProps) => {
    console.log(resistance)
    return (
        <ul
            className="w-full text-[1.6rem] text-destructive font-roboto"
        >
            <li
                className="flex w-full outline outline-[.1rem] outline-pda-border"
            >
                <div
                    className="flex items-center w-[15rem] h-full px-[.4rem] py-[.6rem] gap-x-[.8rem] bg-pda-gray"
                >
                    <div
                        className="relative w-[3.2rem] h-[3.2rem]"
                    >
                        <Image src={"/svg/thermal.svg"} alt="termal" fill className="object-cover" />
                    </div>
                    <span>
                        Тепловий
                    </span>
                </div>
                <div
                    className="flex justify-center items-center px-[2.2rem] py-[1rem] outline outline-[.1rem] outline-pda-border"
                >
                    {resistance.thermal}
                </div>
                <div
                    className="flex-grow px-[1.3rem] py-[1.7rem]"
                >
                    <div
                        className="flex w-full bg-pda-value_bg h-[1rem]"
                    >
                        <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border">
                            <div
                                className="h-full bg-pda-value border-value"
                                style={{
                                    width: resistance.thermal < 1 ? `${resistance.thermal * 100}%` : "100%",
                                    borderWidth: resistance.thermal === 0 ? "0" : ".1rem"
                                }}
                            />
                        </div>
                        <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border">
                            <div
                                className="h-full bg-pda-value border-value"
                                style={{
                                    width: resistance.thermal <= 1 ? "0%" : resistance.thermal > 1 && resistance.thermal < 2 ? `${(resistance.thermal - 1) * 100}%` : "100%",
                                    borderWidth: resistance.thermal <= 1 ? "0" : ".1rem"
                                }}
                            />
                        </div>
                        <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border">
                            <div
                                className="h-full bg-pda-value border-value"
                                style={{
                                    width: resistance.thermal <= 2 ? "0%" : resistance.thermal > 1 && resistance.thermal < 3 ? `${(resistance.thermal - 2) * 100}%` : "100%",
                                    borderWidth: resistance.thermal <= 2 ? "0" : ".1rem"
                                }}
                            />
                        </div>
                        <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border">
                            <div
                                className="h-full bg-pda-value border-value"
                                style={{
                                    width: resistance.thermal <= 3 ? "0%" : resistance.thermal > 1 && resistance.thermal < 4 ? `${(resistance.thermal - 3) * 100}%` : "100%",
                                    borderWidth: resistance.thermal <= 3 ? "0" : ".1rem"
                                }}
                            />
                        </div>
                        <div className="block w-[calc(100%/5)] h-full p-[.1rem] outline outline-[.1rem] outline-pda-value_border" >
                            <div
                                className="h-full bg-pda-value border-value"
                                style={{
                                    width: resistance.thermal <= 4 ? "0%" : resistance.thermal > 1 && resistance.thermal < 5 ? `${(resistance.thermal - 4) * 100}%` : "100%",
                                    borderWidth: resistance.thermal <= 4 ? "0" : ".1rem"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </li>
        </ul >
    );
};