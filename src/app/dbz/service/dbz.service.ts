import { Injectable, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService implements OnInit {

  private personajes: Personaje[] = [
    {
      nombre: ' Goku',
      poder: 6000
    },
    {
      nombre: 'Vegeta',
      poder: 1000
    }
  ]

  get Personajes():Personaje[] {
    return [...this.personajes];
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  AgregarNuevoPersonaje(data: Personaje):void {
    this.personajes.push(data);
  }

}
