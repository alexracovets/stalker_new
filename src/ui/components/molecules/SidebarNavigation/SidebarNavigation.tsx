"use client";

import { useEffect, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@components/molecules";
import { SidebarNavigationIcon } from "@components/atoms";
import { storeSections } from "@/store";

export const SidebarNavigation = () => {
    const categories = storeSections((state) => state.categories);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [api, setApi] = useState<CarouselApi>();

    const categoryClick = (to: number) => {
        if (api) {
            api.scrollTo(to);
        };
    }

    useEffect(() => {
        if (api) {
            const onSelect = () => {
                setActiveIndex(api.selectedScrollSnap());
            };

            api.on("select", onSelect);
            setActiveIndex(api.selectedScrollSnap());

            return () => {
                api.off("select", onSelect);
            };
        }
    }, [api]);

    return (
        <Carousel className="max-w-[37.6rem] w-full mx-auto" setApi={setApi} opts={{ align: "start", loop: true, dragFree: true, skipSnaps: true }}>
            <CarouselContent className="min-h-[5rem]">
                {categories.map((item, idx) => {
                    return (
                        <CarouselItem
                            key={idx}
                            onClick={() => categoryClick(idx)}
                            className="basis-1/4"
                        >
                            <SidebarNavigationIcon name={item} active={activeIndex === idx} />
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious data-menu_pda-previous>A</CarouselPrevious>
            <CarouselNext data-menu_pda-next>D</CarouselNext>
        </Carousel>
    );
};