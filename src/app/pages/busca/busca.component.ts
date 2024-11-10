import { Component, OnInit } from '@angular/core';
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

    this.passagensService.getPassagens(buscaPadrao).subscribe(
      res => {
        console.log(res)
        this.passagens = res.resultado
      }
    )
  }
}
