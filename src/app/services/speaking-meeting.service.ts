import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpeakingMeetingService { 

  private baseUrl = 'http://192.168.1.104:8081';

  constructor(private http: HttpClient) { }

  getSpeakingMeetingList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/v2/speaking-meeting-set`);
  }
 
}
