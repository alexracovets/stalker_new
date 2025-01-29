import { storeCategories } from "@/store";
import { useCallback, useMemo, useEffect } from "react";

const useKeyboardActions = () => {
	// Accessing state and actions from the store
	const { categories, currentCategory, setCurrentCategory } = storeCategories();

	const changeCategory = useCallback(
		(direction: string) => {
			const currentIndex = categories.findIndex(
				(category) => category.id === currentCategory
			);
			switch (direction) {
				case "prev":
					setCurrentCategory(
						categories[currentIndex === 0 ? categories.length - 1 : currentIndex - 1].id
					);
					break;
				case "next":
					setCurrentCategory(
						categories[currentIndex === categories.length - 1 ? 0 : currentIndex + 1].id
					);
					break;
			}
		},
		[categories, currentCategory, setCurrentCategory]
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
