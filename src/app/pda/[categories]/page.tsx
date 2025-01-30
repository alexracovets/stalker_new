import { generateMetadata } from "@utils";

export const metadata = generateMetadata({
    title: "PDA",
    description: "Ласкаво просимо в базу даних Stalker 2",
});

export default async function Categories({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    return <div>My Post: {slug}</div>
}