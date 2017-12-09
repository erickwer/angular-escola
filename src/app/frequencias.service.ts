import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FrequenciasService {

  API_URL = 'http://localhost:3000'
  API_FREQ = 'http://localhost:3000/frequencias?_expand=aluno&_expand=professor&_expand=turma&_expand=disciplina&_expand=horario&_expand=data&_expand=status'

  constructor( private http: HttpClient) {

  }
  getFrequencias(){
      return this.http.get(this.API_FREQ + '/frequencias');
  }

  addFrequencia(id: number, turmaId: number, disciplinaId: number, professorId: number, horarioId: number, alunoId: number, data: string, status: string) {
        const frequencia = {'turmaId': turmaId, 'disciplinaId': disciplinaId,  'professorId': professorId,
        'horarioId': horarioId, 'alunoId': alunoId, data: data, status: status };
        return this.http.post(this.API_URL + '/frequencias', frequencia);
    }

    deleteFrequencia(id: number){
        return this.http.delete(this.API_URL + '/frequencias/' + id);
    }

}
