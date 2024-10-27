import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../types/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) {}

  autenticar(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`,{email,senha})
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/auth/cadastro`, usuario)
  }
}
