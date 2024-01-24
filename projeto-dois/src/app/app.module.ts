import { BrowserModule } from '@angular/platform-browser'; //Ele prepara a aplicaçao para ser rodada em browser
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Modulo de formulários
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { Cursos1Component } from './cursos1/cursos1.component';
import { Cursos1Module } from './cursos1/cursos1.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    declarations: [
        
        // AppComponent,
        MeuPrimeiroComponent,
        MeuPrimeiro2Component
        ],
        imports: [Cursos1Module, BrowserModule, FormsModule, HttpClientModule],
        providers: [], //Autenticação, rotas, login...
        bootstrap: []
})
export class AppModule { }