import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { telefoneValidator } from 'src/app/validators/tefone-validator';
import { cpfValidator } from 'src/app/validators/cpf-validator';
import { UnidadeFederativa } from 'src/app/core/types/unidade-federativa'

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required)

  constructor(
    private formBuilder: FormBuilder
  ){}

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
      confirmarEmail: [null, [Validators.required, Validators.email]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(8)]],
      aceitarTermos:[null,Validators.requiredTrue]
    });
  }
}
