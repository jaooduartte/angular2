import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Cursos1Module } from "./cursos1/cursos1.module";

@Component({
    selector: 'app-root',
    standalone: true,
    // imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [Cursos1Module]
})
export class AppComponent {
  title = 'João';
}
