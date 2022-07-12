import { Component } from '@angular/core';
import { FieldType, FieldArrayType, FieldTypeConfig } from '@ngx-formly/core';
@Component({
  selector: 'formly-repeat-table-section',
  template: `
  <table class="table table-bordered">
  <thead>
    <tr>
      <th *ngFor="let fieldDetail of field?.fieldArray?.fieldGroup; let i = index">
      {{fieldDetail?.name}}</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let fieldGrp of field.fieldGroup; let i = index;">
      <td *ngFor="let fieldObj of fieldGrp.fieldGroup;let j=index;">
        <formly-field class="col" [field]="fieldObj"></formly-field>
      </td>
      <td><button class="btn btn-danger" type="button" (click)="remove(i)" >Remove</button></td>
    </tr>
    <tr>
  </tbody>
</table>
<div style="margin:30px 0;">
  <button class="btn btn-primary" type="button" (click)="add()">Add more</button>
</div>
`
})
export class RepeatTableTypeComponent extends FieldArrayType {
}