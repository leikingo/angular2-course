import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[myModel]'
})
export class MyModelDirective {

    @Input() myValue;

    private element: HTMLInputElement;

    constructor(elementRef: ElementRef){
        this.element = elementRef.nativeElement;
    }

    ngOnInit() {
        console.log('myValue:', this.myValue);
    }
}