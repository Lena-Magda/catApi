import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly ROOT_URL = 'https://api.thecatapi.com/v1/';

  constructor(private http: HttpClient) { }

  getBreeds(token:string, breedQuery:string):Observable<string> {
    //pobiera dane o gatunkach
    let headers = new HttpHeaders().set('x-api-key', token);
    let params = new HttpParams().set('search?q', breedQuery);
    // console.log(breedQuery);

    return this.http.get<string>(this.ROOT_URL + 'breeds', { headers, params })
    .pipe(
      map((res)=>{
        return res
      }),
      catchError((err)=>throwError(err))
    );
  }

  verifyKey(token:string):Observable<string> {
    //weryfikuje poprawność klucza
    let headers = new HttpHeaders().set('x-api-key', token);

    return this.http.get<string>(this.ROOT_URL + 'votes', { headers })
    .pipe(
      map((res)=>{
        return res
      }),
      catchError((err)=>throwError(err))
    );
  }

}
