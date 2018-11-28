import { SearchContext } from './search-context.model';
import { BaseModel } from './base.model';

export interface BaseResponse {
    searchContext: SearchContext;
    result: Array<BaseModel>;
}
