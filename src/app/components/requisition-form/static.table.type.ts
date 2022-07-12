import { Component } from '@angular/core';
import { FieldArrayType, } from '@ngx-formly/core';
@Component({
    selector: 'formly-repeat-table-section',
    template: `
  <table class="table table-bordered">
  <thead>
    <tr>
      <th> Examination Passed</th>
      <th> Board/ College/ University</th>
      <th> Year of Passing</th>
      <th> Subjects taken (Specify Honours/ Major)</th>
      <th> Total marks</th>
      <th> Marks Obtained</th>
      <th>Percentage of Marks Obtained/ CGPA</th>
      <th>Division</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let fieldGrp of field.fieldGroup; let i = index;">
      <td *ngFor="let fieldObj of fieldGrp.fieldGroup;let j=index;">
        <formly-field class="col" [field]="fieldObj"></formly-field>
      </td>
    </tr>
    <tr>
  </tbody>
</table>
`
})
export class StaticTableTypeComponent extends FieldArrayType {
}
