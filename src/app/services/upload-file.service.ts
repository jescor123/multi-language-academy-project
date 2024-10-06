import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileDetails } from '../models/file-details.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService { 

  private baseUrl = 'http://192.168.1.120:8081';

  constructor(private http: HttpClient) { }

  uploadFromBrowser(file: File): Observable<FileDetails> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<FileDetails>(`${this.baseUrl}/v2/upload-file`, formData);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/v2/files`);
  }

  getFileByName(fileName: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/v2/fileByName/${fileName}`);
  }

  async uploadBlob(audioBlob: any, fileName: any) {
      const formData: FormData = new FormData();
      formData.append('file', audioBlob, fileName);
      const apiUrl = this.baseUrl+"/v2/upload-file"; 
      const response = await fetch(apiUrl, {
        method: 'POST',
        cache: 'no-cache',
        body: formData
      });    
      return response.json();      
  } 
  

}
