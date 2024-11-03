import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
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
  form!: FormGroup<any> | null

  constructor(
    private tokenService: TokenService,
    private formService: FormularioService,
    private authService: AutenticacaoService
  ){}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken()
    this.authService.buscarCadastro(this.token).subscribe(cadastro =>{
      this.cadastro = cadastro
      this.nome = this.cadastro.nome.split(" ")[0]
      this.carregarFormulario()
    })
  }

  carregarFormulario () {
    this.form = this.formService.getCadastro()
    this.form?.patchValue({
        nome: this.cadastro.nome,
        nascimento: this.cadastro.nascimento,
        cpf: this.cadastro.cpf,
        telefone: this.cadastro.telefone,
        email: this.cadastro.email,
        senha: this.cadastro.senha,
        genero: this.cadastro.genero,
        cidade: this.cadastro.cidade,
        estado: this.cadastro.estado
    })
  }

  deslogar(){
    console.log('SAIR.... ')
  }

  atualizar(){
    console.log('ATUALIZAR.... ')
  }
}
