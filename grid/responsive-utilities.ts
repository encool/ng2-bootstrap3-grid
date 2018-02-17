import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[hidden]',
    host: {
        '[class.hidden]': 'hidden',
    }
})
export class HiddenDirective {
    @Input("hidden") hidden: boolean = true
    constructor() { }
}