import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  itens = [
    { titulo: 'Adultos', descricao: '(Acima de 12 anos)', controle: this.formBuscaService.obterControle('adultos')},
    { titulo: 'Crianças', descricao: '(Entre 2 e 11 anos)', controle: this.formBuscaService.obterControle('criancas')},
    { titulo: 'Bebês', descricao: '(Até 2 anos)', controle: this.formBuscaService.obterControle('bebes')}
  ];

  constructor(public formBuscaService: FormBuscaService) {}
}
