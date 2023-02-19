import { Component } from '@angular/core';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']

})


export class HeroeComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroName: string = 'Ironman';
  realName: string = 'Tony Stark';
  age: number = 45;
  heroeBorrado: any;
  heroesBorrados: string[] = [];

  get heroNameCapitalized(): string {
    return this.heroName.toUpperCase();
  }

  heroNameAge(): string {
    return `${this.realName} - ${this.age}`;
  }

  changeHeroName(): void {
    this.heroName = 'Spiderman',
    this.realName = 'Peter Parker';
  }

  changeAge(): void {
    this.age = 30;
  }

  borrarHeroe(): any {
    this.heroeBorrado = this.heroes.shift() || 'No hay más...';
    this.heroesBorrados.push(this.heroeBorrado);
    return this.heroesBorrados;
  }





}
