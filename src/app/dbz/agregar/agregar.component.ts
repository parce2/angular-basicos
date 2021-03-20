import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personaje;
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  Agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.AgregarNuevoPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
