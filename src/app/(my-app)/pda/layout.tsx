 
import { generateMetadata } from "@utils";
import { PDALayout } from "@components/templates";
import { JustChildren } from "@types";

export const metadata = generateMetadata({
    title: "PDA",
    description: "Ласкаво просимо в базу даних Stalker 2",
});

const PDA = ({ children }: JustChildren) => {
    return (
        <PDALayout>
            {children}
        </PDALayout>
    );
};

export default PDA;