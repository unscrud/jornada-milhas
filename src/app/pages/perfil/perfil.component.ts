import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  titulo: string = 'Olá Pessoa'
  textoBotao: string = 'ATUALIZAR'
  perfilComponent: boolean = true

  deslogar(){
    console.log('SAIR.... ')
  }

  atualizar(){
    console.log('ATUALIZAR.... ')
  }
}
