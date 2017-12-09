import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ListaDeFrequenciasComponent } from './lista-de-frequencias/lista-de-frequencias.component';
import { CadastroDeFrequenciasComponent } from './cadastro-de-frequencias/cadastro-de-frequencias.component';
import {EscolaService} from './escola.service';
import {FrequenciasService} from './frequencias.service';


@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    ListaDeFrequenciasComponent,
    CadastroDeFrequenciasComponent
  ],
  providers: [
    EscolaService,
    FrequenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
