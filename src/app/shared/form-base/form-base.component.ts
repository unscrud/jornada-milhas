import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { telefoneValidator } from 'src/app/validators/tefone-validator';
import { cpfValidator } from 'src/app/validators/cpf-validator';
import { equalTo } from 'src/app/validators/compara-campos-validator';
import { UnidadeFederativa } from 'src/app/core/types/unidade-federativa'
import { FormularioService } from 'src/app/core/services/formulario.service';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required)

  @Input() titulo = 'Crie sua conta'
  @Input() textoBotao = 'CADASTRAR'
  @Input() perfilComponent = false
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>
  @Output() sair: EventEmitter<any> = new EventEmitter<any>

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) {}

  ngOnInit(){
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, Validators.required],
      cpf: [
        null,
        [
          Validators.required,
          cpfValidator()
        ],
      ],
      cidade: [null, Validators.required],
      genero: ["outro"],
      telefone: [null, [Validators.required, telefoneValidator()]],
      estado: this.estadoControl,
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      confirmarEmail: [null, [Validators.required, Validators.email, equalTo('email')]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(8), equalTo('senha')]],
      aceitarTermos:[null,Validators.requiredTrue]
    });

  if(this.perfilComponent){
    this.cadastroForm.get('aceitarTermos')?.setValidators(null)
  } else {
    this.cadastroForm.get('aceitarTermos')?.setValidators(Validators.requiredTrue)
  }

  this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity()

  this.formularioService.setCadastro(this.cadastroForm)
}

  executarAcao(){
    this.acaoClique.emit()
  }

  deslogar() {
    this.sair.emit()
  }
}
