import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    //Este constructor no esta cumpliendo ninguna funcion
    // constructor() {}

    agregarPersonaje( personaje: Personaje ) {

        this._personajes.push( personaje );
    }

}
