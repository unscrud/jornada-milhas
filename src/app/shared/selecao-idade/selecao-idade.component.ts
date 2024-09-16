import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: "app-selecao-idade",
  templateUrl: "./selecao-idade.component.html",
  styleUrls: ["./selecao-idade.component.scss"],
})
export class SelecaoIdadeComponent implements ControlValueAccessor {
  @Input() titulo: string = "";
  @Input() descricao: string = "";

  value: number = 0;
  onChange = (val: number) => {};
  onTouch = () => {};

  writeValue(val: any): void {
    this.value = val
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  incrementar(): void {
    this.value += 1
    this.onChange(this.value)
    this.onTouch()
  }

  decrementar(): void{
    if (this.value > 0) {
      this.value -= 1
      this.onChange(this.value)
      this.onTouch();
    }
  }
}
