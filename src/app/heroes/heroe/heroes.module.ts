import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe.component';

@NgModule({
    declarations: [
        // Components
        HeroeComponent
    ],
    exports: [
        // Components
        HeroeComponent
    ],
    imports: [
        // Modules
        CommonModule
    ],
    providers: [],

})

export class HeroesModule {

}
