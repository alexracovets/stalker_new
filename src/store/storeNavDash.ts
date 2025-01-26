import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface lineStyles_Type {
    underline: {
        left: string;
        width: string;
    };
    shortline: {
        left: string;
        width: string;
    };
};

interface NavDash_Type {
    isShow: boolean;
    lineStyles: lineStyles_Type;
    setIsShow: (value: boolean) => void;
    setLineStyles: (value: lineStyles_Type) => void;
}

const storeNavDash = create<NavDash_Type>()(
    immer((set) => ({
        isShow: false,
        lineStyles: {
            underline: {
                left: "0px",
                width: "0px"
            },
            shortline: {
                left: "0px",
                width: "0px"
            },
        },
        setLineStyles: (value: lineStyles_Type) => {
            set((state) => {
                state.lineStyles = value;
            });
        },
        setIsShow: (value: boolean) => {
            set((state) => {
                state.isShow = value;
            });
        },
    }))
);

export default storeNavDash;