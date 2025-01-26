import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface PDA_Type {
    isOpen: boolean;
    isPlay: boolean;
    currentCategory: string;
    nextCategory: string;
    prevCategory: string;
    setIsOpen: (value: boolean) => void;
    setIsPlay: (value: boolean) => void;
    setCurrentSection: (value: string) => void;
}

const storePDA = create<PDA_Type>()(
    immer((set) => ({
        isOpen: false,
        isPlay: false,
        currentCategory: "",
        nextCategory: "",
        prevCategory: "",
        setIsOpen: (value) =>
            set((state) => {
                state.isOpen = value;
            }),
        setIsPlay: (value) =>
            set((state) => {
                state.isPlay = value;
            }),
        setCurrentSection: (value) =>
            set((state) => {
                state.currentCategory = value;

            }),
    }))
);

export default storePDA;