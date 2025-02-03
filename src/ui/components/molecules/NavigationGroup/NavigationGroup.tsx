"use client";

import { useEffect, useRef } from "react";

import { NavDash, NavigationGroupWrapper, NavigationLink, NavigationGroupLinks } from "@components/atoms";
import { storeSections } from "@store";
import { useNavDash } from "@hooks";

export const NavigationGroup = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const { setActiveSection, setCurrentSection } = useNavDash({ menuRef });
    const currentSection = storeSections(state => state.currentSection);
    const sections = storeSections(state => state.sections);

    useEffect(() => {
        setCurrentSection();
    }, [setCurrentSection]);

    return (
        <NavigationGroupWrapper menuRef={menuRef}>
            <NavigationGroupLinks setCurrentSection={setCurrentSection}>
                {
                    sections.map((section, idx) => {
                        return (
                            <NavigationLink
                                key={idx}
                                route={section.route}
                                id={section.id}
                                name={section.name}
                                currentSection={currentSection}
                                setActiveSection={setActiveSection}
                            />
                        )
                    })
                }
            </NavigationGroupLinks>
            <NavDash />
        </NavigationGroupWrapper>
    );
};