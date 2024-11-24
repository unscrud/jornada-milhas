import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resultado } from '../../core/types/resultado';
import { Observable, take } from 'rxjs';
import { DadosBusca } from '../../core/types/dados-busca';
import { Passagem } from '../../core/types/passagem';
import { Destaques } from '../../core/types/destaques';

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

    return query
  }

  obterPassagensDestaques (passagens: Passagem[]): Destaques | undefined {
    if(!passagens.length){
      return undefined
    }

    let ordenadoPorTempo = [...passagens].sort(
      (a, b) => a.tempoVoo - b.tempoVoo
    )

    let ordenadoPorPreco = [...passagens].sort(
      (a, b) => a.total - b.total
    )

    let maisRapida = ordenadoPorTempo[0]
    let maisBarata = ordenadoPorPreco[0]

    let ordenadoPorMedia = [...passagens].sort(
      (a, b) => {
        let pontuacaoA = (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;
        let pontuacaoB = (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;
      return pontuacaoA - pontuacaoB;
      }
    )

    let sugerida = ordenadoPorMedia[0]
    
    return { maisRapida, maisBarata, sugerida }
  }

}
