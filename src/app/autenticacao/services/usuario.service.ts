import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../../core/types/usuario';
import { jwtDecode } from  'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userSubject = new BehaviorSubject<Usuario | null>(null)

  constructor(
    private tokenService: TokenService
  ) {
    if (this.tokenService.possuiToken()){
      this.decodificarJWT()
    }
  }

  decodificarJWT(){
    const token = this.tokenService.retornarToken()
    const user = jwtDecode(token) as Usuario
    this.userSubject.next(user)
  }

  returnUser(){
    return this.userSubject.asObservable()
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token)
    this.decodificarJWT()
  }

  logout() {
    this.tokenService.excluirToken()
    this.userSubject.next(null)
  }

  estaLogado(){
    return this.tokenService.possuiToken()
  }
}
