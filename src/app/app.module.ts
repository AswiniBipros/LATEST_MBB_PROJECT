import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RequisitionFormComponent } from './components/requisition-form/requisition-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { TableTypeComponent } from './components/table-form.type';
import { FormlyHorizontalWrapper } from './components/horizontal-wrapper';
import { PanelWrapperComponent } from './components/panel-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePadPage } from './components/signaturePad';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormlyAutocomplete } from "./components/autocomplete-type";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormlyFieldFile } from './components/file-type.component';
import { FormlyFieldStepper } from './components/stepper.type';
import { MatStepperModule } from '@angular/material/stepper';
import { RepeatTableTypeComponent } from './components/repeat-table.type';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { StaticTableTypeComponent } from './components/requisition-form/static.table.type';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RequisitionFormComponent,
    TableTypeComponent,
    FormlyHorizontalWrapper,
    PanelWrapperComponent,
    SignaturePadPage,
    FormlyAutocomplete,
    FormlyFieldFile,
    FormlyFieldStepper,
    RepeatTableTypeComponent,
    StaticTableTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AutoCompleteModule,
    MatStepperModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    SignaturePadModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
        {
          name: 'repeat-table', component: TableTypeComponent
        },
        {
          name: 'repeat', component: RepeatTableTypeComponent
        },
        {
          name: 'sign', component: SignaturePadPage
        },
        {
          name: 'autocomplete', component: FormlyAutocomplete
        },
        {
          name: 'stepper', component: FormlyFieldStepper, wrappers: []
        },
        {
          name: "statictable", component: StaticTableTypeComponent
        }
      ],
      validators: [
        { name: "email", validation: EmailValidator },
        { name: "mobileNo", validation: mobileNoValidator },
        { name: "aadhaar", validation: aadhaarValidator }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: "email", message: EmailValidatorMessage },
        { name: "mobileNo", message: mobileNoValidatorMessage },
        { name: "aadhaar", message: aadhaarValidatorMessage }
      ],
      wrappers: [
        { name: 'form-field-horizontal', component: FormlyHorizontalWrapper },
        { name: 'panel', component: PanelWrapperComponent },
      ],
    }),
    FormlyBootstrapModule,
    HttpClientModule,
  ],
  providers: [CommonService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function EmailValidator(control: FormControl): ValidationErrors {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value) ? null as any : { 'email': true };
}

export function EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `"${field.formControl?.value}" is not a valid Email Address`;
}
export function mobileNoValidator(control: FormControl): ValidationErrors {
  return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(control.value) ? null as any : { 'mobileNo': true };
}
export function mobileNoValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `"${field.formControl?.value}" must enter a 10 digit no.`;
}
export function aadhaarValidator(control: FormControl): ValidationErrors {

  return /^(\+\d{1,3}[- ]?)?\d{4}$/.test(control.value) ? null as any : { 'aadhaar': true };

}

export function aadhaarValidatorMessage(err: any, field: FormlyFieldConfig) {

  return `"${field.formControl?.value}" enter only last 4 digits of aadhaar`;

}