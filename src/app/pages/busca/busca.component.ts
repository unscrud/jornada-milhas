import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { Passagem } from 'src/app/core/types/passagem';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = []

  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService,
  ){}

  ngOnInit(): void {
    const buscaPadrao = {
      somenteIda: false,
      passageirosAdultos: 1,
      passageirosCriancas: 0,
      passageirosBebes: 0,
      tipo: "Executiva",
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25
    }

    const busca = this.formBuscaService.formEstaValido ? this.formBuscaService.obterDadosDeBusca() : buscaPadrao

    this.passagensService.getPassagens(busca).subscribe(
      res => {
        console.log(res)
        this.passagens = res.resultado
      }
    )
  }
}
