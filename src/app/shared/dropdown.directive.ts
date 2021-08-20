import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.visible') isOpen = false;

  @HostListener('mouseenter') openDropdown() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') closeDropdown() {
    this.isOpen = false;
  }

  constructor() { }

}
