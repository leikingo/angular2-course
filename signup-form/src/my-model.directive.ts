import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[myModel]'
})
export class MyModelDirective {

    constructor(elementRef: ElementRef){
        console.log('myModel element:', elementRef.nativeElement);
    }
}