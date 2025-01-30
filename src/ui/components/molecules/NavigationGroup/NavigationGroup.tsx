"use client";

import { useEffect, useRef } from "react";

import { NavDash, NavigationGroupWrapper, NavigationLink, NavigationGroupLinks } from "@components/atoms";
import { storeCategories } from "@store";
import { useNavDash } from "@hooks";

export const NavigationGroup = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const { setActiveCategory, setCurrentCategory } = useNavDash({ menuRef });
    const currentCategory = storeCategories(state => state.currentCategory);
    const categories = storeCategories(state => state.categories);

    useEffect(() => {
        setCurrentCategory();
    }, [setCurrentCategory]);

    return (
        <NavigationGroupWrapper menuRef={menuRef}>
            <NavigationGroupLinks setCurrentCategory={setCurrentCategory}>
                {
                    categories.map((category, idx) => {
                        return (
                            <NavigationLink
                                key={idx}
                                route={category.route}
                                id={category.id}
                                name={category.name}
                                currentCategory={currentCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        )
                    })
                }
            </NavigationGroupLinks>
            <NavDash />
        </NavigationGroupWrapper>
    );
};