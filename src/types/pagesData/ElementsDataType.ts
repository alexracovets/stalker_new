export interface ElementsDataType {
    route: string;
    name: string;
    title: string;
    image: string;
    info: string[];
    how_to_get: string[];
    resistance: {
        name: string;
        image: string;
        value: number;
    }[];
    details: {
        weight: number;
        cost: number;
        artefacts_slots: number;
    }
}