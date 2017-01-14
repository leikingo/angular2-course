import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[myModel]'
})
export class MyModelDirective {

    @Input('myModel') model;

    private element: HTMLInputElement;

    constructor(elementRef: ElementRef){
        this.element = elementRef.nativeElement;
    }

    ngOnInit() {
        console.log('model:', this.model);
        this.element.value = this.model;
    }
}