import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface PDA_Type {
    isOpen: boolean;
    isPlay: boolean;
    setIsOpen: (value: boolean) => void;
    setIsPlay: (value: boolean) => void;
}

export const storePDA = create<PDA_Type>()(
    immer((set) => ({
        isOpen: false,
        isPlay: false,
        setIsOpen: (value) =>
            set((state) => {
                state.isOpen = value;
            }),
        setIsPlay: (value) =>
            set((state) => {
                state.isPlay = value;
            }),
    }))
);