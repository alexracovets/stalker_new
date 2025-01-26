import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface PDA_Type {
    isOpen: boolean;
    isPlay: boolean;
    mainSection: string;
    setIsOpen: (value: boolean) => void;
    setIsPlay: (value: boolean) => void;
    setMainSection: (value: string) => void;
}

const usePDA = create<PDA_Type>()(
    immer((set) => ({
        isOpen: false,
        isPlay: false,
        mainSection: "",
        setIsOpen: (value) =>
            set((state) => {
                state.isOpen = value;
            }),
        setIsPlay: (value) =>
            set((state) => {
                state.isPlay = value;
            }),
        setMainSection: (value) =>
            set((state) => {
                state.mainSection = value;
            }),
    }))
);

export default usePDA;
