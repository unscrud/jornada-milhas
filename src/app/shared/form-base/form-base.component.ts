import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent {
  cadastroForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(){
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
    })
  }
}
