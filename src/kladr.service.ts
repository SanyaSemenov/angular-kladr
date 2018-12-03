import { Injectable, Inject } from '@angular/core';
import { BaseResponse } from './base-response.interface';
import { Observable } from 'rxjs';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';
import { SearchContext } from './search-context.model';
import { KLADR_OPTIONS } from './tokens';
import { Options } from './options';

@Injectable({
    providedIn: 'root'
})
export class KladrService {
    private readonly url;
    private readonly baseUrl = 'kladr-api.ru/api.php';
    private readonly HTTP = 'http://';
    private readonly HTTPS = 'https://';
    constructor(
        private jsonp: Jsonp,
        @Inject(KLADR_OPTIONS) private options: Options
    ) {
        this.url = options.isSecure ? this.HTTPS + this.baseUrl : this.HTTP + this.baseUrl;
    }

    /**
     * Makes api request
     * @param query of type KladrRequestParams
     * @returns Observable<BaseResponse> Observable with received data or error message
     */
    api(query: SearchContext): Observable<BaseResponse> {
        let apiUrl = this.url + '?';
        Object.keys(query).forEach(key => {
            apiUrl += `${key}=${query[key]}&`;
        });
        apiUrl += 'callback=JSONP_CALLBACK';
        return this.jsonp.request(apiUrl).pipe(
            map((response: any) => {
                return (response.json() as BaseResponse) || response.json();
            })
        );
    }
}
