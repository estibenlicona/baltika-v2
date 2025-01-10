import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  label: string;
  value: string | number;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  componentId: string;
  private static instanceCount = 0;

  constructor() {
    SelectComponent.instanceCount++;
    this.componentId = `component-${SelectComponent.instanceCount}`;
  }

  @Input() options: SelectOption[] = [];
  @Input() placeholder: string = 'Seleccione una opción';

  selectedOption: string | number | null = null;
  isOpen: boolean = false;

  private onChange: (value: string | number | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | number | null): void {
    this.selectedOption = value;
  }

  registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(value: string | number | null) {
    this.selectedOption = value;
    this.onChange(value);
    this.isOpen = false;
  }

  isSelected(){
    return this.selectedOption == null;
  }

  getSelectedLabel(): string {
    const option = this.options.find(option => option.value === this.selectedOption);
    return option ? option.label : this.placeholder;
  }

  clearSelection(event: Event): void {
    event.stopPropagation();
    this.selectOption(null);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const classId = `.select-container-${this.componentId}`;
    const clickInside = (event.target as HTMLElement).closest(classId);
    if (!clickInside) {
      this.isOpen = false;
    }
  }

  onBlur() {
    this.onTouched();
  }
}
