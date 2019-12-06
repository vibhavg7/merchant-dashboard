import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ErrorTracker } from '../shared/errorTracker';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }
  
  private _storeServiceUrl = "http://ec2-3-134-77-29.us-east-2.compute.amazonaws.com:3000/storesapi/";

  fetchAllStoreOrders(storeId: number, page_number: number, page_size: number, filterBy: any) {
    let obj = {};
    obj['page_number'] = page_number; obj['page_size'] = page_size; obj['storeId'] = storeId;
    obj['filterBy'] = filterBy;

    console.log(obj);

    return this._http.post<any[]>(`${this._storeServiceUrl}storeinfo/storeorders`, obj)
      .pipe(
        tap(data => {
          // console.log(data);
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<ErrorTracker> {

    let dataError = new ErrorTracker();
    dataError.errorNumber = 100;
    dataError.errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    dataError.friendlyMessage = "An error retriving data";
    return throwError(dataError);
  }
}
