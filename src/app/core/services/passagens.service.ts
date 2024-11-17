import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resultado } from '../types/resultado';
import { Observable } from 'rxjs';
import { DadosBusca } from '../types/dados-busca';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl: string = environment.apiUrl2

  constructor(private httpClient: HttpClient){}

  getPassagens(search: DadosBusca) : Observable<Resultado>{
    const params = this.converterParametrosParaString(search)
    
    return this.httpClient
        .get<Resultado>(`${this.apiUrl}/passagem/search${params}`)
  }

  converterParametrosParaString(busca: DadosBusca){
    const query = Object.entries(busca)
        .map( ([key,value]) => {
          if(!value){
            return '' 
          }
          return `${key}=${value}`
        })
        .join('&')

    return query
  }
}
