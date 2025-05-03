import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

const signUpPostUrl = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    const userData = new User();
    userData.username = 'jescor123';
    userData.email = 'guerrerojescor@gmail.com';
    userData.password = '12345678';
    console.log('Das ist eine liebe Frau');
    return this.http.post(signUpPostUrl + 'signup', {"username": "jesc123", "email": "pocoloco@gmail.com", "password": "12345678"}, httpOptions);   
   }

}
