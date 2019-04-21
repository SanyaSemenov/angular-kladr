import { SearchContext } from './search-context.model';
import { BaseModel } from './base.model';

export interface KladrResponse {
    searchContext: SearchContext;
    result: Array<BaseModel>;
}
