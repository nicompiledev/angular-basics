import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  totalPoder: number = 0;

  constructor( private dbzService: DbzService ) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };

    this.totalPoder = this.dbzService.personajes
      .map((personaje) => personaje.poder) // Obtener un array con los poderes de los personajes
      .reduce((acumulador, poder) => acumulador + poder, 0); // Sumar los poderes del array y almacenar el resultado en totalPoder

    //Segunda opcion
    // this.totalPoder = this.dbzService.personajes.reduce( ( acc, personaje ) => acc + personaje.poder, 0 );
  }
}
