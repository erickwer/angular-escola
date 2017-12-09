import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {CadastroDeFrequenciasComponent} from './cadastro-de-frequencias/cadastro-de-frequencias.component';
import {ListaDeFrequenciasComponent} from './lista-de-frequencias/lista-de-frequencias.component';

const appRoutes: Routes = [
  // {path: 'cadastrar-disciplina', component: CadastroDeDisciplinaComponent},
  // {path: 'cadastrar-turma', component: CadastroDeTurmaComponent},
  // {path: 'disciplinas', component: ListaDeDisciplinasComponent},
  // {path: 'disciplinas/:id', component: DisciplinaComponent},
  {path: 'frequencias/relatorio', component: ListaDeFrequenciasComponent},
  {path: 'frequencias/cadastrar', component: CadastroDeFrequenciasComponent},
    {path: '', component: ListaDeFrequenciasComponent},
  {path: '**', component: PaginaNaoEncontradaComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- apenas para depuração
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
