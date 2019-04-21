import { KladrSearchContext } from './kladr-search-context.interface';
import { KladrItem } from './kladr-item.interface';

export interface KladrResponse {
    searchContext: KladrSearchContext;
    result: Array<KladrItem>;
}
