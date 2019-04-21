import { KladrContentType } from './kladr-content-type.enum';

export interface KladrItem {
    id: string;
    name: string;
    zip?: number;
    type?: string;
    typeShort?: string;
    okato?: string;
    contentType?: KladrContentType;
    parents?: KladrItem[];
}
