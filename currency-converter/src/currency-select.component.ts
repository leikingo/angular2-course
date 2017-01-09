import { Component } from '@angular/core';

@Component({
    selector: 'currency-select',
    inputs: ['selected'],
    template: `
        <select>
            <option>{{selected}}</option>
        </select>
    `
})
export class CurrencySelectComponent {

    selected = 'USD';

}