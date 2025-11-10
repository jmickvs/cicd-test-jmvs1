import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-xss',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>XSS Example (moved to module)</h3>
    <input [(ngModel)]="userInput" placeholder="Type something..." />
    <div [innerHTML]="userInput"></div>
    <div>{{ sanitizedHtml.toString() }}</div>
  `
})
export class XssComponent {
  userInput = '';

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.userInput);
  }
}
