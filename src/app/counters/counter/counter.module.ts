import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';

@NgModule({
    declarations: [
        // Components
        CounterComponent
    ],
    exports: [
        // Components
        CounterComponent
    ],
    imports: [
        // Modules

        CommonModule

    ],
    providers: [],
})

export class CounterModule {

}
