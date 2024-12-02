import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your backend URL
  constructor(private http: HttpClient) {}
  triggerNotification(notificationPayload: {
    title: string;
    body: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/notify`, notificationPayload);
  }
}
