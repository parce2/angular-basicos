import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: 'picoro',
    poder: 3500
  }

  constructor() { }

  ngOnInit(): void {
  }

}
