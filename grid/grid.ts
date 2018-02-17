import { Directive, Input, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive(
    {
        selector: '[bsContainerFluid]',
        host: {
            class: "container-fluid"
        },
    })
export class ContainerFluidDirective {
    constructor() { }
}

@Directive(
    {
        selector: '[bsContainer]',
        host: {
            class: "container"
        }
    })
export class ContainerDirective {
    constructor() { }
}

@Directive(
    {
        selector: '[bsRow]',
        host: {
            class: "row"
        }
    })
export class RowDirective {
    constructor() { }
}

@Directive(
    {
        selector: `  [bsCol],
        [bsCol.xs], [bsCol.sm], [bsCol.md], [bsCol.lg], [bsCol.xl],
        [bsCol.lt-sm], [bsCol.lt-md], [bsCol.lt-lg], [bsCol.lt-xl],
        [bsCol.gt-xs], [bsCol.gt-sm], [bsCol.gt-md], [bsCol.gt-lg]`
    })
export class ColDirective implements OnInit {

    _cacheInput: any = {}

    @Input('bsCol.xs') set bsColXs(val) { this._cacheInput['bsColXs'] = val };
    @Input('bsCol.sm') set bsColSm(val) { this._cacheInput['bsColSm'] = val };
    @Input('bsCol.md') set bsColMd(val) { this._cacheInput['bsColMd'] = val };
    @Input('bsCol.lg') set bsColLg(val) { this._cacheInput['bsColLg'] = val };
    @Input('bsCol.xl') set bsColXl(val) { this._cacheInput['bsColXl'] = val };

    @Input('bsCol.gt-xs') set bsColGtXs(val) { this._cacheInput['bsColGtXs'] = val };
    @Input('bsCol.gt-sm') set bsColGtSm(val) { this._cacheInput['bsColGtSm'] = val };
    @Input('bsCol.gt-md') set bsColGtMd(val) { this._cacheInput['bsColGtMd'] = val };
    @Input('bsCol.gt-lg') set bsColGtLg(val) { this._cacheInput['bsColGtLg'] = val };

    @Input('bsCol.lt-sm') set bsColLtSm(val) { this._cacheInput['bsColLtSm'] = val };
    @Input('bsCol.lt-md') set bsColLtMd(val) { this._cacheInput['bsColLtMd'] = val };
    @Input('bsCol.lt-lg') set bsColLtLg(val) { this._cacheInput['bsColLtLg'] = val };
    @Input('bsCol.lt-xl') set bsColLtXl(val) { this._cacheInput['bsColLtXl'] = val };

    constructor(private renderer2: Renderer2, private elementRef: ElementRef) {

    }

    private _class: string = ''
    _classMap = {
        bsColXs: 'col-xs-',
        bsColSm: 'col-sm-',
        bsColMd: 'col-md-',
        bsColLg: 'col-lg-',
        bsColXl: 'col-xl-',
    }
    ngOnInit() {
        for (let key in this._cacheInput) {
            let _class = this._classMap[key] + this._cacheInput[key]
            this.renderer2.addClass(this.elementRef.nativeElement, _class)
        }
    }

}

import { NgModule } from '@angular/core';
import { HiddenDirective } from "./responsive-utilities";
// import { ContainerDirective, ContainerFluidDirective, RowDirective, ColDirective } from "./grid";

@NgModule({
    imports: [

    ],
    declarations: [
        ContainerDirective,
        ContainerFluidDirective,
        RowDirective,
        ColDirective,
        HiddenDirective
    ],
    exports: [
        ContainerDirective,
        ContainerFluidDirective,
        RowDirective,
        ColDirective,
        HiddenDirective
    ]
})
export class Bootstrap3GridModule { }