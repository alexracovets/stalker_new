import { generateMetadata } from "@utils";

export const metadata = generateMetadata({
    title: "404",
    description: "Ласкаво просимо в базу даних Stalker 2",
});

export default function NotFoundPDA() {
    return (
        <div className="flex flex-grow flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">404 - Сторінку не знайдено</h1>
            <p className="mb-4">Вибачте, але такої сторінки не існує.</p>
        </div>
    );
};