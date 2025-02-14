export interface ElementsDataType {
    route: string;
    name: string;
    title: string;
    image: string;
    info: string[];
    how_to_get?: string[];
    resistance?: {
        name: string;
        image: string;
        value: number;
    }[];
    impacts?: {
        title: string;
        info: string;
    }[];
    details?: {
        name: string;
        image: string;
        value: string;
        valueColor?: string;
    }[]
}