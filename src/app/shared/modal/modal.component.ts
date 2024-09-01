import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  itens = [
    { titulo: 'Adultos', descricao: '(Acima de 12 anos)' },
    { titulo: 'Crianças', descricao: '(Entre 2 e 11 anos)' },
    { titulo: 'Bebês', descricao: '(Até 2 anos)' }
  ];
}
