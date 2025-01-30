import { generateMetadata } from "@utils";

export const metadata = generateMetadata({
    title: "PDA",
    description: "Ласкаво просимо в базу даних Stalker 2",
});

export default function PDA() {
    return (
        <div>
            <h1
                className="text-[3.4rem] leading-[3.984rem] font-roboto_condensed font-[500]"
            >
                Сторінка PDA
            </h1>
        </div>
    );
};