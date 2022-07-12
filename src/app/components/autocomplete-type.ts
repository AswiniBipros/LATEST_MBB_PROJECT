import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
   selector: 'formly-autocomplete',
   template: `
 <p-autoComplete 
    field="label"
    [dataKey]="'value'"
    [formlyAttributes]="field" 
    [forceSelection]="true"
    [suggestions]="to['results']"
    [style]="to['style']" 
    [inputStyle]="{'width':'100%'}"
    (completeMethod)="to['searchObject'](to, $event)"
    [dropdown]="true"
    ></p-autoComplete>
 `,
})
export class FormlyAutocomplete extends FieldType {

}