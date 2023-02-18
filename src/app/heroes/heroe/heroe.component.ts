import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent{

  heroName: string = 'Ironman';
  realName: string = 'Tony Stark';
  age: number = 45;

  get heroNameCapitalized(): string {
    return this.heroName.toUpperCase();
  }

  getName(): string{
    return `${this.heroName}`;
  }

  getAge(): number {
    return this.age;
  }

  changeName(): void {
    this.heroName = 'Spiderman',
    this.realName = 'Peter Parker'
  }

  changeAge(): void {
    this.age = 30
  }





}
