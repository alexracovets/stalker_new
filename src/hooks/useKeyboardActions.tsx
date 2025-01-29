import { storeCategories } from "@/store";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useEffect } from "react";

const useKeyboardActions = () => {
	// Accessing state and actions from the store
	const { categories, currentCategory } = storeCategories();
	const router = useRouter();

	const changeCategory = useCallback(
		(direction: string) => {

			const currentIndex = categories.findIndex((category) => category.id === currentCategory);
			let routePath = "";

			switch (direction) {
				case "prev":
					routePath = categories[currentIndex === 0 ? categories.length - 1 : currentIndex - 1].id;
					break;
				case "next":
					routePath = categories[currentIndex === categories.length - 1 ? 0 : currentIndex + 1].id;
					break;
			}

			router.push(`/pda/${routePath}`);

		},
		[categories, currentCategory]
	);

	const actions: Record<string, () => void> = useMemo(
		() => ({
			"prev-category": () => changeCategory("prev"),
			"next-category": () => changeCategory("next"),
		}),
		[changeCategory]
	);

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			const keyMap: Record<string, string> = {
				"KeyQ": "prev-category",
				"KeyE": "next-category",
			};

			const actionName = keyMap[event.code];
			if (actionName && actions[actionName]) {
				event.preventDefault();
				actions[actionName]();
			}
		},
		[actions]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [handleKeyPress]);

	return { actions };
};

export default useKeyboardActions;
