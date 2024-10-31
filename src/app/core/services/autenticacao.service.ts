import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../types/usuario';
import { UsuarioService } from './usuario.service';

interface AuthResponse {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  apiUrl: string = environment.apiUrl

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(email: string, senha: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/auth/login`,
      { email, senha },
      { observe: 'response'}
    ).pipe(
      tap((response) => {
        const authToken = response.body?.token || ''
        this.usuarioService.salvarToken(authToken)
      })
    )
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/auth/cadastro`, usuario)
  }

  buscarCadastro(token: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.get<Usuario>(`${this.apiUrl}/auth/perfil`, { headers })
  }
}
