import { KladrContentType } from './kladr-content-type.enum';
import { KladrWithParent } from './kladr-with-parent.enum';
import { KladrCodeType } from './kladr-code-type.enum';
import { KladrOneString } from './kladr-one-string.enum';

export interface KladrSearchContext {
    token?: string;
    key?: string;
    contentType?: KladrContentType;
    query?: string;
    withParent?: KladrWithParent;
    limit?: number;
    regionId?: string;
    disctrictId?: string;
    cityId?: string;
    streetId?: string;
    buildingId?: string;
    typeCode?: KladrCodeType;
    zip?: number;
    oneString?: KladrOneString;
}
