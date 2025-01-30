"use client";

import { ReactNode } from "react";

import { useKeyboardActions } from "@hooks";
import { Button } from "@components/atoms";

interface ButtonKeyUpProps {
	action: string;
	children: ReactNode;
	footer?: boolean;
}

export const ButtonKeyUp = ({ action, children, footer }: ButtonKeyUpProps) => {

	const { actions } = useKeyboardActions();

	return (
		<Button onClick={actions[action]} variant="destructive" >
			{children}
		</Button>
	);
};
