import { ContentType } from './content-type.enum';
import { WithParent } from './with-parent.enum';
import { TypeCode } from './type-code.enum';
import { OneString } from './one-string.enum';

export class KladrRequestParams {
    token?: string;
    key?: string;
    contentType?: ContentType;
    query?: string;
    withParent?: WithParent;
    limit?: number;
    regionId?: string;
    disctrictId?: string;
    cityId?: string;
    streetId?: string;
    buildingId?: string;
    typeCode?: TypeCode;
    zip?: number;
    onString?: OneString;
}
