import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../base.service";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpClient } from "@angular/common/http";
import { ICity } from "../../models/city.model";
@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    readAll(): Observable<ICity[]> {
      return this._httpClient
      .get<ICity[]>(this.BaseUrl() + '/api/Cities', this.RequestHeaders() )
      .pipe(catchError(this.errorHandler));
    }

    deleteItem(id : number) {
      return this._httpClient
      .delete<ICity>(this.BaseUrl() + '/api/Cities/delete-city/' + id, this.RequestHeaders())
      .pipe(catchError(this.errorHandler))
    }

    errorHandler(error: any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return new ErrorObservable(new Error(errorMessage));
   }
}