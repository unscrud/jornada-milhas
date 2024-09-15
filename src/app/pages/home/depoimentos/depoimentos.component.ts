import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { Depoimento } from 'src/app/core/types/depoimento';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {
  depoimentos!: Depoimento[]

  constructor(private servico: DepoimentoService){}

  ngOnInit(): void {
    this.servico.listar()
        .subscribe( depoimentos => {
          this.depoimentos = depoimentos
        })
  }
}
