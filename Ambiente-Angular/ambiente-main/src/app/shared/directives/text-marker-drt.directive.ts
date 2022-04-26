import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextMarkerDrt]'
})
export class TextMarkerDrtDirective {
  @Input() corDeFundo: string = 'yellow';
  @Input() corDoTexto: string = 'white';

  constructor(private elemento: ElementRef) { };

  ngOnInit(): void {
    this.mudarFundo();      
  }

  mudarFundo(cor: string = 'yellow'){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.color = this.corDoTexto || cor;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }

}
