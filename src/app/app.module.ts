
import { NgModule } from '@angular/core'; // Angular core module
import { BrowserModule } from '@angular/platform-browser'; // Angular platform module

import { AppComponent } from './app.component'; // Import the app component
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({ // @NgModule decorator
  declarations: [ // The components that belong to this module
    AppComponent,
    HeroeComponent,


  ],
  imports: [ // The modules that belong to this module
    BrowserModule,
    DbzModule

  ],
  providers: [], // The services that belong to this module
  bootstrap: [AppComponent] // The root component that Angular creates and inserts into the index.html host web page
})
export class AppModule { } // The AppModule class
