import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { telefoneValidator } from 'src/app/validators/tefone-validator';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup

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
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
        ],
      ],
      cidade: [null, Validators.required],
      genero: ["outro"],
      telefone: [null, [Validators.required, telefoneValidator()]],
      estado: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      confirmarEmail: [null, [Validators.required, Validators.email]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(8)]],
      aceitarTermos:[null,Validators.requiredTrue]
    });
  }
}
