import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateMask]'
})
export class DateMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    // diretiva ainda não está funcionando adequadamente, reconsiderar
    //const input = this.el.nativeElement;
    //let trimmed = input.value.replace(/[^0-9]/g, '');
    //
    //if (trimmed.length > 2) {
    //  trimmed = trimmed.slice(0, 2) + '/' + trimmed.slice(2);
    //}
    //if (trimmed.length > 5) {
    //  trimmed = trimmed.slice(0, 5) + '/' + trimmed.slice(5, 9);
    //}
//
    //input.value = trimmed;
  }
}
