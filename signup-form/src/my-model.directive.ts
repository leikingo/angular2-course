import { Directive, ElementRef, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
    selector: '[myModel]',
    exportAs: 'myModel'
})
export class MyModelDirective {

    @Input() required; // see if the attribute is set...

    // use the property name + Change, to simplify usage ([()] syntax).
    @Output('myModelChange') modelChange = new EventEmitter();

    invalid = true;

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
        console.log("value is required:",! (this.required === undefined) );
        // very simple demonstration. To avoid unnescessary dom updates
        // we should only add and remove classes when the validity changes.
        if ( this.required === undefined || this.element.value ){
            this.element.classList.remove("my-invalid");
            this.element.classList.add("my-valid");
            this.invalid = false;
        } else {
            this.element.classList.remove("my-valid");
            this.element.classList.add("my-invalid");
            this.invalid = true;
        }
    }

}