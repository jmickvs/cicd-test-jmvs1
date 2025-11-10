import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CsrfService } from './csrf.service';

@Component({
  selector: 'app-csrf-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h4>CSRF Protection Test</h4>
    <p>Server token (from cookie): {{ serverToken }}</p>

    <label>Request payload</label>
    <input [(ngModel)]="payload" placeholder="payload" />
    <button (click)="send()">Send POST</button>

    <p *ngIf="response">Response: {{ response | json }}</p>
  `
})
export class CsrfTestComponent {
  payload = '';
  response: any = null;
  serverToken = '';

  constructor(private csrf: CsrfService) {
    this.serverToken = this.csrf.getTokenFromCookie() || '';
  }

  send() {
    this.csrf.postWithCsrf('http://localhost:3000/__test/reset   ', { data: this.payload }).subscribe((res: any) => {
      this.response = res;
    }, (err: any) => {
      this.response = { error: err?.message || err?.statusText || err };
    });
  }
}
