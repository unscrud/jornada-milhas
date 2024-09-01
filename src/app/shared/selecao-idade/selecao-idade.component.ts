import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selecao-idade',
  templateUrl: './selecao-idade.component.html',
  styleUrls: ['./selecao-idade.component.scss']
})
export class SelecaoIdadeComponent {
  @Input() titulo: string = ''
  @Input() descricao: string = ''
}
