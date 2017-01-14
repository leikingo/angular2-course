import { Directive, ElementRef, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
    selector: '[myModel]'
})
export class MyModelDirective {

    // use the property name + Change, to simplify usage ([()] syntax).
    @Output('myModelChange') modelChange = new EventEmitter();

    private element: HTMLInputElement;

    constructor(elementRef: ElementRef){
        this.element = elementRef.nativeElement;
    }

    @Input('myModel') set model(value){
        this.element.value = value;
        this.validate();
    }

    // whenever input is fired on the hosting dom element, onInput is called
    @HostListener('input') onInput() {
        console.log("onInput:", this.element.value);
        this.modelChange.emit(this.element.value);
        this.validate();
    }

    private validate() {
        // very simple demonstration. To avoid unnescessary dom updates
        // we should only add and remove classes when the validity changes.
        if ( this.element.value ){
            this.element.classList.remove("my-invalid");
            this.element.classList.add("my-valid");
        } else {
            this.element.classList.remove("my-valid");
            this.element.classList.add("my-invalid");
        }
    }

}