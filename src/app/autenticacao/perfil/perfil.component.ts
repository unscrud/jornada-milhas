import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/services/autenticacao.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/autenticacao/services/token.service';
import { UsuarioService } from 'src/app/autenticacao/services/usuario.service';
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
    private router: Router,
    private usuarioService: UsuarioService,
    private authService: AutenticacaoService
  ){}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken()
    this.authService.buscarCadastro().subscribe(cadastro =>{
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

  atualizar(){
    const dadosAtualizados : Usuario = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado
    }

    this.authService.editarCadastro(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastro editado com sucesso')
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.error('Erro ao alterar cadastro: ', err)
      }
    })
  }

  deslogar(){
    this.usuarioService.logout()
    this.router.navigate(['auth/login'])
  }
}
