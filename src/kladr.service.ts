import { Injectable } from '@angular/core';
import { KladrRequestParams } from './kladr-request-params.model';
import { BaseResponse } from './base-response.interface';
import { Observable } from 'rxjs';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class KladrService {
    private readonly url = 'http://kladr-api.ru/api.php';
    constructor(private jsonp: Jsonp) { }

    /**
     * Makes api request
     * @param query of type KladrRequestParams
     * @returns Observable<BaseResponse> Observable with received data or error message
     */
    api(query: KladrRequestParams): Observable<BaseResponse> {
        let apiUrl = this.url + '?';
        Object.keys(query).forEach(key => {
            apiUrl += `${key}=${query[key]}&`;
        });
        apiUrl += 'callback=JSONP_CALLBACK';
        return this.jsonp.request(apiUrl)
            .pipe(
                map((response: any) => {
                    return response.json() as BaseResponse || response.json();
                })
            );
    }
}
