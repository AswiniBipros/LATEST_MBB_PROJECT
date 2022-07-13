import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-stepper',
  template: `
  <mat-horizontal-stepper>
    <mat-step 
      *ngFor="let step of field.fieldGroup; let index = index; let last = last;">
      <ng-template matStepLabel>{{ step.templateOptions.label }}</ng-template>
      <formly-field [field]="step"></formly-field>
      <div>
        <button matStepperNext *ngIf="!last"
          class="btn btn-primary" type="button"
          [disabled]="!isValid(step)"(click)="doThis()" style="margin-left: 8px;float: right">
          Save & Next
        </button>

        <button 
          *ngIf="last" class="btn btn-primary"
          [disabled]="!form.valid"
          type="submit" style="margin-left: 10px;float: right;">
          Final Submit
        </button>

        <button matStepperPrevious *ngIf="index !== 0"
          class="btn btn-primary"
          type="button" style="float: right;">
          Back
        </button>

        
      </div>
    </mat-step>
</mat-horizontal-stepper>
`,
})
export class FormlyFieldStepper extends FieldType {
  isLinear = false;

  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup
      ? field.fieldGroup.every((f) => this.isValid(f))
      : true;
  }
  doThis() {
    console.log(this.model);
    console.log(this.field.form.value);
  }

}
