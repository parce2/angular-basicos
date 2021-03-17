import { Component } from '@angular/core'


@Component({
  selector: 'app-contador',
  template: `
  <h1> {{titulo}} </h1>
<span> {{numero}} </span>
<button (click)="acumular(cont)" >+</button>
<button (click)="acumular(-cont)" >-</button>
  `
})
export class ContadorComponent {
  titulo: string = 'Contador App';

  numero: number = 0;
  cont: number = 5;

  acumular(valor: number): void {
    this.numero += valor;
  }
}