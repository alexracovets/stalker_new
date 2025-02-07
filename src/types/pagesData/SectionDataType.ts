interface LinkType {
    route: string;
    name: string;
    sub_links: LinkType[];
}

export interface SectionDataType {
    route: string;
    name: string;
    title: string;
    info: string[];
    links: LinkType[];
}