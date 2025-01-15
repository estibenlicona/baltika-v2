import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numberInput]'
})
export class NumberInputDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    this.filterNonNumeric(input);
    this.limitLength(input);
  }

  private filterNonNumeric(input: HTMLInputElement): void {
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  private limitLength(input: HTMLInputElement): void {
    if (input.value.length > 2) {
      input.value = input.value.slice(0, 2);
    }
  }
}
