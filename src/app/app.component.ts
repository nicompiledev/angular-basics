import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Nico</h1>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
