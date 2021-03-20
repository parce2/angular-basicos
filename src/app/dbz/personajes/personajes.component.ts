import { Component, Input, OnInit } from '@angular/core';

import { MainPageComponent } from '../main-page/main-page.component';
import { Personaje } from '../interfaces/personajes.interface';
import { DbzService } from '../service/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private dbzService:DbzService) { }

  ngOnInit(): void {
  }
  
  get personajes():Personaje[]  {
    return this.dbzService.Personajes;
  }
}
