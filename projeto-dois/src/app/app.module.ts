import { BrowserModule } from '@angular/platform-browser'; //Ele prepara a aplicaçao para ser rodada em broweser
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Modulo de formulários
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
    declarations: [
        AppComponent,
        MeuPrimeiroComponent,
        MeuPrimeiro2Component //Declaração de componentes filhos em um...
        ],
        imports: [BrowserModule, FormsModule, HttpModule],
        providers: [], //Autenticação, rotas, login...
        bootstrap: [AppComponent]
})
export class AppModule { }