/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: "app-selecao-idade",
  templateUrl: "./selecao-idade.component.html",
  styleUrls: ["./selecao-idade.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelecaoIdadeComponent),
      multi: true
    }
  ]
})
export class SelecaoIdadeComponent implements ControlValueAccessor {
  @Input() titulo = "";
  @Input() descricao = "";

  value = 0;
  onChange = (val: number) => {};
  onTouch = () => {};

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled){
      this.value = 0;
    }
  }

  incrementar(): void {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }

  decrementar(): void{
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
