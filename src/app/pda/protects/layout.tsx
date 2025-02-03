
import { generateMetadata } from "@utils";
import { PagesLayout } from "@components/templates";
import { JustChildren } from "@types";

export const metadata = generateMetadata({
    title: "PDA",
    description: "Ласкаво просимо в базу даних Stalker 2",
});

const PDA = ({ children }: JustChildren) => {
    return (
        <PagesLayout>
            {children}
        </PagesLayout>
    );
};

export default PDA;