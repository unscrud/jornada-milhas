import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: "root",
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false, Validators.required),
      origem: new FormControl(null, Validators.required),
      destino: new FormControl(null, Validators.required),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      dataIda: new FormControl(null, Validators.required),
      dataVolta: new FormControl(null, Validators.required),
    });
  }

  getDescricaoDePassageiros(): string {
    let descricao = "";

    const adultos = this.formBusca.get("adultos")?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? "s" : ""}`;
    }

    const criancas = this.formBusca.get("criancas")?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ", " : ""}${criancas} criança${
        criancas > 1 ? "s" : ""
      }`;
    }

    const bebes = this.formBusca.get("bebes")?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ", " : ""}${bebes} bebê${
        bebes > 1 ? "s" : ""
      }`;
    }

    return descricao;
  }

  obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);

    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }

    return control as FormControl;
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({ tipo });
    }
    console.log("tipo alterado para: ", tipo);
  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;

    this.formBusca.patchValue({
      origem: destino,
      destino: origem
    })
  }

  get formEstaValido () {
    return this.formBusca.valid
  }
}
