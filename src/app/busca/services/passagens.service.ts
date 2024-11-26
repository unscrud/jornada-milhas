import { HttpClient } from '@angular/common/http';
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
  apiUrl: string = environment.apiUrl2;
  precoMin = 0;
  precoMax = 0;

  constructor(private httpClient: HttpClient){}

  getPassagens(search: DadosBusca): Observable<Resultado>{
    const params = this.converterParametrosParaString(search);
    const url = `${this.apiUrl}/passagem/search?${params}`;
    const obs = this.httpClient.get<Resultado>(url);

    obs.pipe(take(1)).subscribe(res => {
      this.precoMin = res.precoMin;
      this.precoMax = res.precoMax;
    });

    return obs;
  }

  converterParametrosParaString(busca: DadosBusca){
    const query = Object.entries(busca)
        .map( ([key,value]) => {
          if(!value){
            return ''; 
          }
          if (key === 'tipo'){
            return `${key}=${encodeURIComponent(value.toString())}`;
          }
          return `${key}=${value.toString()}`;
        })
        .filter(Boolean)
        .join('&');

    return query;
  }

  obterPassagensDestaques (passagens: Passagem[]): Destaques | undefined {
    if(!passagens.length){
      return undefined;
    }

    const ordenadoPorTempo = [...passagens].sort(
      (a, b) => a.tempoVoo - b.tempoVoo
    );

    const ordenadoPorPreco = [...passagens].sort(
      (a, b) => a.total - b.total
    );

    const maisRapida = ordenadoPorTempo[0];
    const maisBarata = ordenadoPorPreco[0];

    const ordenadoPorMedia = [...passagens].sort(
      (a, b) => {
        const pontuacaoA = (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;
        const pontuacaoB = (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;
      return pontuacaoA - pontuacaoB;
      }
    );

    const sugerida = ordenadoPorMedia[0];
    
    return { maisRapida, maisBarata, sugerida };
  }

}
