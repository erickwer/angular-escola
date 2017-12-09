import { Component, OnInit } from '@angular/core';
import {FrequenciasService} from '../frequencias.service';

@Component({
  selector: 'app-lista-de-frequencias',
  templateUrl: './lista-de-frequencias.component.html',
  styleUrls: ['./lista-de-frequencias.component.css']
})
export class ListaDeFrequenciasComponent implements OnInit {

    frequencias ;
    frequencia = null;
    excluir_ok = false;
    excluir_erro = false;


    constructor(private frequenciasService: FrequenciasService) {
    }

    ngOnInit() {
        this.atualizarLista();
    }
    excluir(frequencia) {
        if (confirm('Tem certeza que deseja excluir a frequencia  de ' + frequencia.aluno.nome + '?')) {
            this.frequenciasService.deleteFrequencia(frequencia.id)
                .subscribe(ok => {
                    this.excluir_ok = true;
                    this.excluir_erro = false;
                    this.atualizarLista();
                }, erro => {
                    this.excluir_ok = false;
                    this.excluir_erro = true;
                });
        }
    }

    atualizarLista() {
        this.frequenciasService.getFrequencias()
            .subscribe(frequencias => this.frequencias = frequencias);
    }




}
