import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl: string = environment.apiUrl2

  constructor(private httpClient: HttpClient){}

  getPassagens(search: any){
    
    let params = new HttpParams()

    for (const key in search){
      if (search.hasOwnProperty(key)){
        params = params.set(key, search[key])
      }
    }
    
    return this.httpClient.get(`${this.apiUrl}/passagem/search`, {params} )
  }
}
