import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Passagem } from '../types/passagem';
import { Resultado } from '../types/resultado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl: string = environment.apiUrl2

  constructor(private httpClient: HttpClient){}

  getPassagens(search: any) : Observable<Resultado>{
    const params = search
    
    return this.httpClient.get<Resultado>(`${this.apiUrl}/passagem/search`, {params} )
  }
}
