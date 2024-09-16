import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl("Econômica"),
    });
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
    if (evento.selected){
      this.formBusca.patchValue({tipo})
    }
    console.log('tipo alterado para: ', tipo)
  }

}
