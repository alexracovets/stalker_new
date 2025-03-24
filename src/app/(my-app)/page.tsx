import { HomeScreen } from "@components/organisms";
import { generateMetadata } from "@utils";

export const metadata = generateMetadata({
  title: "Головна",
  description: "Ласкаво просимо в базу даних Stalker 2",
});

export default function Home() {
  return (
    <HomeScreen />
  );
};