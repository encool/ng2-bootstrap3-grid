import { NgModule } from '@angular/core';

import { ContainerDirective, ContainerFluidDirective, RowDirective, ColDirective } from "./grid";

@NgModule({
    imports: [

    ],
    declarations: [
        ContainerDirective,
        ContainerFluidDirective,
        RowDirective,
        ColDirective
    ],
    exports: [
        ContainerDirective,
        ContainerFluidDirective,
        RowDirective,
        ColDirective
    ]
})
export class Bootstrap3GridModule { }