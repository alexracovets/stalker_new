import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { PdaStoreType } from '@types';

export const storePDA = create<PdaStoreType>()(
    immer((set) => ({
        isOpen: false,
        isPlay: false,
        setIsOpen: (value) => set((state) => { state.isOpen = value; }),
        setIsPlay: (value) => set((state) => { state.isPlay = value; }),
    }))
);