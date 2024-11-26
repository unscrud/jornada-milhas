import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/busca/services/passagens.service';
import { DadosBusca } from 'src/app/core/types/dados-busca';
import { Destaques } from 'src/app/core/types/destaques';
import { Passagem } from 'src/app/core/types/passagem';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
  destaques?: Destaques;

  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService,
  ){}

  ngOnInit(): void {
    const buscaPadrao: DadosBusca = {
      somenteIda: false,
      passageirosAdultos: 1,
      passageirosCriancas: 0,
      passageirosBebes: 0,
      tipo: "Executiva",
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25
    };

    const dadosBusca = this.formBuscaService.formEstaValido ? this.formBuscaService.obterDadosDeBusca() : buscaPadrao;

    this.busca(dadosBusca);
  }

  busca(dadosBusca: DadosBusca){
    this.passagensService.getPassagens(dadosBusca)
        .pipe(take(1))
        .subscribe(
          res => {
            this.passagens = res.resultado;
            this.formBuscaService.formBusca.patchValue({
              precoMin: res.precoMin,
              precoMax: res.precoMax
            });
            this.obterDestaques();
          }
        );
  }

  obterDestaques(){
    this.destaques = this.passagensService.obterPassagensDestaques(this.passagens);
  }

}
