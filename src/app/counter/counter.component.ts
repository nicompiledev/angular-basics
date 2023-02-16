import { Component } from '@angular/core';

@Component({
  selector: 'counter-app',
  template: `<div class="App">
  <div class="contenedor-principal">
    <h1>CounterApp</h1>
    <p class="contador">{{ clickCount }}</p>
    <div class="button-container">
      <button (click)="incrementClickCount()">+ 1</button>
      <button (click)="resetClickCount()">Reset</button>
      <button (click)="decrementClickCount()">- 1</button>
    </div>
  </div>
</div>`,
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  clickCount: number = 0;

  incrementClickCount() {
    this.clickCount++;
  }

  decrementClickCount() {
    this.clickCount--;
  }

  resetClickCount() {
    this.clickCount = 0;
  }
}
