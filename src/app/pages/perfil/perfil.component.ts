import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { TokenService } from 'src/app/core/services/token.service';
import { Usuario } from 'src/app/core/types/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  titulo: string = 'Olá '
  textoBotao: string = 'ATUALIZAR'
  perfilComponent: boolean = true

  token: string = ''
  nome: string = ''
  cadastro!: Usuario

  constructor(
    private tokenService: TokenService,
    private authService: AutenticacaoService
  ){}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken()
    this.authService.buscarCadastro(this.token).subscribe(cadastro =>{
      this.cadastro = cadastro
      this.nome = this.cadastro.nome
    })
  }

  deslogar(){
    console.log('SAIR.... ')
  }

  atualizar(){
    console.log('ATUALIZAR.... ')
  }
}
