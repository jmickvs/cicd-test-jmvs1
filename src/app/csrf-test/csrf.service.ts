import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CsrfService {
  private http = inject(HttpClient);

  // Read CSRF token stored in a cookie named 'XSRF-TOKEN'
  getTokenFromCookie(): string | null {
    const match = document.cookie.match(new RegExp('(^|; )' + 'XSRF-TOKEN' + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  // Attach token to POST request header (X-XSRF-TOKEN)
  postWithCsrf<T>(url: string, body: any): Observable<T> {
    const token = this.getTokenFromCookie();
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (token) {
      headers = headers.set('X-XSRF-TOKEN', token);
    }
    return this.http.post<T>(url, body, { headers });
  }
}
