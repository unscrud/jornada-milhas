import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/unidade-federativa';

@Component({
  selector: "app-dropdown-uf",
  templateUrl: "./dropdown-uf.component.html",
  styleUrls: ["./dropdown-uf.component.scss"],
})
export class DropdownUfComponent implements OnInit {
  @Input() label = "";
  @Input() placeholder = "";
  @Input() iconePrefixo = "";
  @Input() control!: FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;

  filteredOptions = [];

  constructor(private ufService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.ufService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
    });

    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(""),
      map((value) => this.filtrarUFs(value || ""))
    );
  }

  private filtrarUFs(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUf = typeof value === 'string' ? value : value?.nome;

    const valorFiltrado = nomeUf?.toLowerCase();

    const result = this.unidadesFederativas.filter((estado) =>
      estado.nome.toLowerCase().includes(valorFiltrado)
    );

    return result;
  }

  displayFn(estado: UnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : "";
  }
}
