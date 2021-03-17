import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})

export class HeroeComponent {
  heroe: string = ' Iroman';
  edad: number = 15;

  get nameMayus():string {

    return this.heroe.toUpperCase();
  }

  getName(): string {
    return `${this.heroe}- ${this.edad}`;
  }

  cambiarNombre():void{
    this.heroe= 'Spiderman';
  }

  cambiarEdad():void{
    this.edad= 100;
  }

}