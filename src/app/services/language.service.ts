import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

const baseUrlGet = 'http://192.168.1.120:8081/v2/language-set';
const baseUrlPost = 'http://192.168.1.120:8081/v2/load-format1-questions';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-Control' : 'no-cache',
        'Pragma' : 'no-cache',
        'Mode': 'no-cors',
        'Access-Control-Allow-Origin': '*'
      }),
      observe: "response" as 'body'
    };
    return this.http.get(
      baseUrlGet,
      httpOptions
    )
    .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
    );
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrlPost, data);
  }

  private ReturnResponseData(response: any) {
    return response;
  }
  
  private handleError(error: any) {
    return throwError(error);
  }

}
