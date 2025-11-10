import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  menu = [
    { label: 'XSS Example', path: '/' },
    { label: 'CSRF Test', path: '/csrf-test' }
  ];
}
