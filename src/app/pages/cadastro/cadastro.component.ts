import { Component } from '@angular/core';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { Usuario } from 'src/app/core/types/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent: boolean = false

  constructor(
    private formularioService: FormularioService,
    private authService: AutenticacaoService
  ){}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro()

    if(formCadastro?.valid) {
      const usuario = formCadastro.getRawValue() as Usuario
      this.authService.cadastrar(usuario).subscribe({
        next: (value) => {
          console.log("Cadastro realizado com sucesso: ", value)
        },
        error: (err) => {
          console.log("Erro ao realizar cadastro: ", err)
        }

      })
    }
    
  }
}
