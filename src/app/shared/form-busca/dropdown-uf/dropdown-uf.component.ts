import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/unidade-federativa';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = ""
  @Input() iconePrefixo: string = ""

  unidadesFederativas: UnidadeFederativa[] = []

  filteredOptions = []

  constructor( private ufService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.ufService.listar()
        .subscribe(dados => {
          this.unidadesFederativas = dados
        })
  }
}
