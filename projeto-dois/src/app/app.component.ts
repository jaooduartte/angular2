import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  template: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Olá Mundo';
}
