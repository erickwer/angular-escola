import { Component, OnInit } from '@angular/core';
import {EscolaService} from '../escola.service';
import {FrequenciasService} from '../frequencias.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-cadastro-de-frequencias',
  templateUrl: './cadastro-de-frequencias.component.html',
  styleUrls: ['./cadastro-de-frequencias.component.css']
})
export class CadastroDeFrequenciasComponent implements OnInit {
  id = null;
turmas=  null ;
turma;
disciplinas = null;
disciplina;
professors = null;
professor
horarios = null;
horario;
alunos = null;
aluno;
data;
status;
cadastro_ok = false;
cadastro_erro = false;
atualizar_ok = false;
atualizar_erro = false;
    constructor(private escolaService: EscolaService,
                private frequenciasService: FrequenciasService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.escolaService.getTurmas()
            .subscribe(turmas => this.turmas = turmas);
        this.escolaService.getDisciplinas()
            .subscribe(disciplinas => this.disciplinas = disciplinas);
        this.escolaService.getProfessores()
            .subscribe(professors => this.professors = professors);
        this.escolaService.getHorarios()
            .subscribe(horarios => this.horarios = horarios);
        this.escolaService.getAlunos()
            .subscribe(alunos => this.alunos = alunos);


    }


    salvar() {
            this.frequenciasService.addFrequencia(0, parseInt(this.turma), parseInt(this.disciplina),
                parseInt(this.professor),parseInt(this.horario),parseInt(this.aluno), this.data, this.status)
                .subscribe(
                    frequencia => {
                        this.limpar();
                        this.cadastro_ok = true;
                    },
                    erro => {
                        this.cadastro_erro = true;
                        this.cadastro_ok = false;
                    }
                );
        }
    limpar() {
        this.turma = null;
        this.disciplina = null;
        this.professor = null;
        this.horario = null;
        this.aluno = null;
        this.data = null;
        this.status = null;
        this.cadastro_ok = false;
        this.cadastro_erro = false;
    }
}

