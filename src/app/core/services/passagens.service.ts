import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resultado } from '../types/resultado';
import { Observable, take } from 'rxjs';
import { DadosBusca } from '../types/dados-busca';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl: string = environment.apiUrl2
  precoMin: number = 0
  precoMax: number = 0

  constructor(private httpClient: HttpClient){}

  getPassagens(search: DadosBusca) : Observable<Resultado>{
    const params = this.converterParametrosParaString(search)
    const url = `${this.apiUrl}/passagem/search?${params}`
    const obs = this.httpClient.get<Resultado>(url)

    obs.pipe(take(1)).subscribe(res => {
      this.precoMin = res.precoMin
      this.precoMax = res.precoMax
    })

    return obs
  }

  converterParametrosParaString(busca: DadosBusca){
    const query = Object.entries(busca)
        .map( ([key,value]) => {
          if(!value){
            return '' 
          }
          if (key === 'tipo'){
            return `${key}=${encodeURIComponent(value.toString())}`
          }
          return `${key}=${value.toString()}`
        })
        .filter(Boolean)
        .join('&')
    
    console.log(query)
    return query
  }
}
