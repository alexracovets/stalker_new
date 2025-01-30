"use client";

import { useKeyboardActions } from "@hooks";
import { Button } from "@components/atoms";
import { ButtonKeyUpType } from "@types";

export const ButtonKeyUp = ({ action, children, footer }: ButtonKeyUpType) => {

	const { actions } = useKeyboardActions();

	return (
		<Button onClick={actions[action]} variant="destructive" >
			{children}
		</Button>
	);
};
