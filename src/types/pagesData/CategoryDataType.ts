import { InfoPageDataType } from './InfoPageDataType';

export interface CategoryDataType {
    category_name: string;
    category_title: string;
    category_route: string;
    info_pages: InfoPageDataType[];
};