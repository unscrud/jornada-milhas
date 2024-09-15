import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {

  constructor(private servico: DepoimentoService){}

  ngOnInit(): void {
    this.servico.listar()
        .subscribe( depoimentos => {
          console.log(depoimentos)
        })
  }


}
