import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { NavDashType } from '@types';

export const storeNavDash = create<NavDashType>()(
    immer((set) => ({
        isShow: false,
        lineStyles: {
            underline: { left: "0px", width: "0px" },
            shortline: { left: "0px", width: "0px" },
        },
        setLineStyles: (value) => set((state) => { state.lineStyles = value; }),
        setIsShow: (value) => set((state) => { state.isShow = value; }),
    }))
);