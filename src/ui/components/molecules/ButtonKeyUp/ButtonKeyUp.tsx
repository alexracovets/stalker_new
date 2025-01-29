"use client";

import useKeyboardActions from "@/hooks/useKeyboardActions";
import { Button } from "@components/atoms";
import { ReactNode, useEffect } from "react";

interface ButtonKeyUpProps {
	action: string;
	children: ReactNode;
	onClick?: () => void;
}

export const ButtonKeyUp = ({
	action,
	onClick,
	children,
}: ButtonKeyUpProps) => {

	const {actions} = useKeyboardActions();
	useEffect(() => {}, [action]);

	return (
		<Button onClick={actions[action]} variant="destructive">
			{children}
		</Button>
	);
};
