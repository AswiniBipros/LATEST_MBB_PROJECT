import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldArrayType } from '@ngx-formly/core';
import { distinctUntilChanged, map, of, startWith, switchMap, } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-requisition-form',
  templateUrl: './requisition-form.component.html',
  styleUrls: ['./requisition-form.component.scss']
})
export class RequisitionFormComponent implements OnInit {

  constructor(private api: ApiService, private common: CommonService, public datepipe: DatePipe) { }



  form = new FormGroup({});
  model: any = {
    "semesterMarks": [{}],
    "qualificationDetails": [
      { "examinationPassed": "Madhyamik/ 10th Std" },
      { "examinationPassed": "HS (+2) Stage" },
      { "examinationPassed": "Graduation" },
      { "examinationPassed": "MA/M.Sc./ M.Com." },
      { "examinationPassed": "B.L.I.Sc" },
      { "examinationPassed": "Others" }
    ],
  };
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,

    },
  };

  valueoptionsMany: any;
  fields: FormlyFieldConfig[] = [
    {
      "fieldGroup": [
        {
          "key": "admissionYear",
          "type": "input",
          "className": "col-md-4 field-counter-lower-alpha",
          "defaultValue": this.datepipe.transform(new Date(), "YYYY"),
          "templateOptions": {
            "label": "Admission Year",
            "required": true,
            "valueProp": "label",
            "labelProp": "label",
          },
          "expressionProperties": {
            "templateOptions.disabled": "true"
          }
        },
        {
          "key": "date",
          "type": "input",
          "className": "col-md-4 field-counter-lower-alpha",
          "defaultValue": this.datepipe.transform(new Date()),
          "templateOptions": {
            "label": "Date",
            "required": true,
          },
          "expressionProperties": {
            "templateOptions.disabled": "true",
          }
        }
      ],
      "fieldGroupClassName": "row"
    },
    {
      "type": 'stepper',
      "fieldGroup": [
        {
          "fieldGroupClassName": "row field-group-counter-decimal",
          "templateOptions": { "label": 'Personal Information' },
          "fieldGroup": [
            {
              "className": 'section-label col-md-12',
              "template": '<div><strong>Program Admission Details:</strong></div>'
            },
            {
              "className": 'section-label col-md-12',
              "template": '<hr />',
            },
            {
              "key": "universityName",
              "type": "select",
              "className": "col-md-3 field-counter-lower-alpha",
              "templateOptions": {
                "label": "College / University",
                "placeholder": "--select--",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": true,
                "valueProp": "label",
                "labelProp": "label"
              },

              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "course",
              "type": "select",
              "className": "col-md-3 field-counter-lower-alpha",
              "templateOptions": {
                "label": "Course",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": true,
                "valueProp": "label",
                "labelProp": "label",
                "placeholder": "--select--",
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "academicYear",
              "type": "select",
              "className": "col-md-3 field-counter-lower-alpha",
              "templateOptions": {
                "label": "Academic Year",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": true,
                "valueProp": "label",
                "labelProp": "label",
                "placeholder": "--select--",
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "subject",
              "type": "select",
              "className": "col-md-3 field-counter-lower-alpha",
              "templateOptions": {
                "label": "Subject",
                "placeholder": "--select--",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": true,
                "valueProp": "label",
                "labelProp": "label"
              },

              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "className": 'section-label col-md-12',
              "template": '<div><strong>Candidate Details:</strong></div>'
            },
            {
              "className": 'section-label col-md-12',
              "template": '<hr />',
            },
            {
              "key": "candidatePrefix",
              "type": "select",
              "className": "col-md-2 field-counter-lower-alpha",
              "templateOptions": {
                "label": "Prefix",
                "options": [
                  {
                    "label": "Mr.",
                    "value": "Mr."
                  },
                  {
                    "label": "Mrs.",
                    "value": "Mrs."
                  },
                  {
                    "label": "Ms.",
                    "value": "Ms."
                  }
                ],
                "placeholder": "--select--"
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "candidateFirstName",
              "type": "input",
              "className": "col-md-4 field-counter-lower-alpha",
              "templateOptions": {
                "label": "First Name",
                "required": true,
                "placeholder": "First Name"
              },
              "validators": {
                "validation": ['name'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "candidateMiddleName",
              "type": "input",
              "className": "col-md-3 ",
              "templateOptions": {
                "label": "Middle Name",
                "placeholder": "Middle Name"
              },
              "validators": {
                "validation": ['name'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "candidateLastName",
              "type": "input",
              "className": "col-md-3 ",
              "templateOptions": {
                "label": "Last Name",
                "required": true,
                "placeholder": "Last Name"
              },
              "validators": {
                "validation": ['name'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "className": 'section-label col-md-12',
              "template": "<div><strong>Candidate's Father's Details:</strong></div>"
            },
            {
              "className": 'section-label col-md-12',
              "template": '<hr />',
            },
            {
              "key": "candidateFatherPrefix",
              "type": "select",
              "className": "col-md-2 field-counter-lower-alpha",
              "templateOptions": {
                "label": "Prefix",
                "options": [
                  {
                    "label": "Mr.",
                    "value": "Mr."
                  },
                  {
                    "label": "Late",
                    "value": "Late"
                  }
                ],
                "placeholder": "--select--"
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "fatherFirstName",
              "type": "input",
              "className": "col-md-4 field-counter-lower-alpha",
              "templateOptions": {
                "label": "First Name",
                "required": true,
                "placeholder": "First Name"
              },
              "validators": {
                "validation": ['name'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "fatherMiddleName",
              "type": "input",
              "className": "col-md-3 ",
              "templateOptions": {
                "label": "Middle Name",
                "placeholder": "Middle Name"
              },
              "validators": {
                "validation": ['name'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "fatherLastName",
              "type": "input",
              "className": "col-md-3 ",
              "templateOptions": {
                "label": "Last Name",
                "required": true,
                "placeholder": "Last Name"
              },
              "validators": {
                "validation": ['name'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "className": 'section-label col-md-12',
              "template": "<div><strong>Candidate's Mother's Details:</strong></div>"
            },
            {
              "className": 'section-label col-md-12',
              "template": '<hr />',
            },
            {
              "key": "candidateMotherPrefix",
              "type": "select",
              "className": "col-md-2 field-counter-lower-alpha",
              "templateOptions": {
                "label": "Prefix",
                "options": [
                  {
                    "label": "Mrs.",
                    "value": "Mrs."
                  },
                  {
                    "label": "Late",
                    "value": "Late"
                  }
                ],
                "placeholder": "--select--"
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "motherFirstName",
              "type": "input",
              "className": "col-md-4 field-counter-lower-alpha",
              "templateOptions": {
                "label": "First Name",
                "required": true,
                "placeholder": "First Name"
              },
              "validators": {
                "validation": ['name'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": " motherMiddleName",
              "type": "input",
              "className": "col-md-3 ",
              "templateOptions": {
                "label": "Middle Name",
                "placeholder": "Middle Name"
              },
              "validators": {
                "validation": ['name'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "motherLastName",
              "type": "input",
              "className": "col-md-3 ",
              "templateOptions": {
                "label": "Last Name",
                "required": true,
                "placeholder": "Last Name"
              },
              "validators": {
                "validation": ['name'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "className": 'section-label col-md-12',
              "template": "<div><strong>Personal Details:</strong></div>"
            },
            {
              "className": 'section-label col-md-12',
              "template": '<hr />',
            },
            {
              "key": "dateOfBirth",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Date Of Birth",
                "type": "date",
                "placeholder": "dd-mm-yyyy",
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "gender",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Gender",
                "placeholder": "--select--",
                "options": [
                  { "value": "male", "label": "male" },
                  { "value": "female", "label": "female" }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "category",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Category",
                "placeholder": "--select--",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "personWithDisability",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Person With Disability",
                "placeholder": "--select--",
                "options": [
                  { "value": "yes", "label": "yes" },
                  { "value": "no", "label": "no" }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "nationality",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Nationality",
                "placeholder": "--select--",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "religion",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Religion",
                "placeholder": "--select--",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "mobileNo",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Mobile No.",
                "placeholder": "Mobile No.",
                "required": true
              },
              "validators": {
                "validation": ['mobileNo'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "occupationOfFatherOrMother",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Father???s/ Mother???s Occupation",
                "type": "text",
                "placeholder": "occupation",
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "annualFamilyIncome",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Annual Family Income(Rs.)",
                "type": "text",
                "placeholder": "-select-",
                "options": [
                  { "value": "Less than 100000", "label": "Less than 100000" },
                  { "value": "100000 - 250000", "label": "100000 to 250000" },
                  { "value": "250000 - 500000", "label": "250000 to 500000" },
                  { "value": "Greater than 500000", "label": "Greater than 500000" },
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "email",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Email Id",
                "type": "email",
                "placeholder": "email",
                "required": true
              },
              "validators": {
                "validation": ['email'],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "maritalStatus",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Martial Status",
                "placeholder": "--select--",
                "options": [
                  { "value": "unmarried", "label": "married" },
                  { "value": "unmarried", "label": "married" }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "guardianMobileNo",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Guardian Mobile No.",
                "placeholder": "Mobile No.",
                "required": true
              },
              "validators": {
                "validation": ['mobileNo']
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "aadhaarNo",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Aadhaar No.",
                "type": "number",
                "placeholder": "Aadhaar",
                "required": true
              },
              "validators": {
                "validation": ['aadhaar']
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "otherIdentification",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Other Identification",
                "placeholder": "--select--",
                "options": [
                  { "value": "voterId", "label": "Voter Id" },
                  { "value": "panNo", "label": "PAN" },
                  { "value": "drivingLicenceNo", "label": "Driving Licence No" },
                ],
                "required": true,
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "voterId",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": " ",
                "type": "text",
                "placeholder": "voter id",
                "required": false
              },
              "hideExpression": (model) => {
                if (model.otherIdentification != "voterId") {
                  if (this.form.get('voterId')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('voterId').markAsUntouched();
                  }
                  delete model.voterId;

                  return true;
                }
                return false;
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled",
                "templateOptions.required": "model.otherIdentification == 'voterId'"
              }
            },

            {
              "key": "panNo",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": " ",
                "type": "text",
                "placeholder": "Pan No.",
                "required": false
              },
              "hideExpression": (model) => {
                if (model.otherIdentification != "panNo") {
                  if (this.form.get('panNo')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('panNo').markAsUntouched();
                  }
                  delete model.panNo;

                  return true;
                }

                return false;
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled",
                "templateOptions.required": "model.otherIdentification == 'panNo'"
              }
            },
            {
              "key": "drivingLicenceNo",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": " ",
                "type": "text",
                "placeholder": "Driving Licence No.",
                "required": false
              },
              "hideExpression": (model) => {
                if (model.otherIdentification != "drivingLicenceNo") {
                  if (this.form.get('drivingLicenceNo')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('drivingLicenceNo').markAsUntouched();
                  }
                  delete model.drivingLicenceNo;

                  return true;
                }

                return false;
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled",
                "templateOptions.required": "model.otherIdentification == 'drivingLicenceNo'"
              }
            },
            {
              "className": 'section-label col-md-12',
              "template": '<hr />',
            }

          ],

        },
        {
          "fieldGroupClassName": "row field-group-counter-decimal",
          "templateOptions": { "label": 'Residential information' },
          "fieldGroup": [
            {
              "key": "presentAddress",
              "type": "textarea",
              "className": "col-md-6",
              "templateOptions": {
                "rows": 2,
                "label": "Present Address",
                "placeholder": "Full Address",
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "presentPostOffice",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "PO.",
                "type": "text",
                "placeholder": "Post office",
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "presentState",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "State",
                "placeholder": "--select--",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "presentDistrict",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "District",
                "placeholder": "--select--",
                "options": [
                  {
                    "value": "puri",
                    "label": "puri",
                  }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "presentPincode",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Pincode",
                "placeholder": "pin",
                "required": true
              },
              "validators": {
                "validation": ['pincode']
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "className": 'section-label col-md-12',
              "template": '<hr />',
            },
            {
              "key": "sameAspresentAddress",
              "type": "checkbox",
              "className": "col-md-12",
              "defaultValue": false,
              "templateOptions": {
                "label": "Permanent address same As present Address?",
                "placeholder": "Full Address",
                "change": (field => {
                  let sameAsPresentAddress = field.form?.get('sameAspresentAddress')?.value;
                  if (sameAsPresentAddress) {
                    let address = field.form?.get('presentAddress')?.value;
                    let po = field.form?.get('presentPostOffice')?.value;
                    let state = field.form?.get('presentState')?.value;
                    let district = field.form?.get('presentDistrict')?.value;
                    let pincode = field.form?.get('presentPincode')?.value;
                    field.form?.get('permanentAddress')?.setValue(address);
                    field.form?.get('permanentPostOffice')?.setValue(po);
                    field.form?.get('permanentState')?.setValue(state);
                    field.form?.get('permanentDistrict')?.setValue(district);
                    field.form?.get('permanentPincode')?.setValue(pincode);
                  }
                }),
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "permanentAddress",
              "type": "textarea",
              "className": "col-md-6",
              "templateOptions": {
                "rows": 2,
                "label": "Permanent Address",
                "placeholder": "Full Address",
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "permanentPostOffice",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "PO.",
                "type": "text",
                "placeholder": "Post office",
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "permanentState",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "State",
                "placeholder": "--select--",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "permanentDistrict",
              "type": "select",
              "className": "col-md-3",
              "templateOptions": {
                "label": "District",
                "placeholder": "--select--",
                "options": [
                  {
                    "value": "puri",
                    "label": "puri",
                  }
                ],
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "permanentPincode",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": "Pincode",
                "placeholder": "pin",
                "required": true
              },
              "validators": {
                "validation": ['pincode']
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            }
          ],
        },
        {
          "fieldGroupClassName": "row field-group-counter-decimal",
          "templateOptions": { "label": 'Educational Information' },
          "fieldGroup": [
            {
              "key": "qualificationStatus",
              "type": "radio",
              "className": "col-md-12",
              "wrappers": ['form-field-horizontal'],
              "templateOptions": {
                "label": "Candidate",
                "required": true,
                "options": [
                  { "value": "Appearing", "label": "Appearing" },
                  { "value": "Graduated", "label": "Graduated" },
                ]
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "graduatedOrAppearingWith",
              "type": "select",
              "className": "col-md-4",
              "templateOptions": {
                "label": "Candidate Graduated / Appearing with:",
                "placeholder": "--select--",
                "required": true,
                "options": [
                  { "value": "General", "label": "General" },
                  { "value": "Honours", "label": "Honours" },
                  { "value": "B.L.I.Sc", "label": "B.L.I.Sc" },
                ],
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "graduatedOrAppearingElectiveSubject",
              "type": "select",
              "className": "col-md-8",
              "templateOptions": {
                "label": " Candidate graduated /Appearing with which elective subject (as per his/her choice of admission).",
                "placeholder": "--select--",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": false,
                "attributes": { "style": "width:50%" }
              },
              "hideExpression": (model) => {
                if (model.graduatedOrAppearingWith != "General") {
                  if (this.form.get('graduatedOrAppearingElectiveSubject')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('graduatedOrAppearingElectiveSubject').markAsUntouched();
                  }
                  delete model.graduatedOrAppearingElectiveSubject;

                  return true;
                }
                return false;
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled",
                "templateOptions.required": "true"
              }
            },
            {
              "key": "graduatedOrAppearingHonours",
              "type": "select",
              "className": "col-md-4",
              "templateOptions": {
                "label": " Candidate graduated / Appearing with Honours in",
                "placeholder": "--select--",
                "options": [
                  { "value": "demo", "label": "demo" }
                ],
                "required": false
              },
              "hideExpression": (model) => {
                if (model.graduatedOrAppearingWith != "Honours") {
                  if (this.form.get('graduatedOrAppearingHonours')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('graduatedOrAppearingHonours').markAsUntouched();
                  }
                  delete model.graduatedOrAppearingHonours;

                  return true;
                }
                return false;
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled",
                "templateOptions.required": "true"
              }
            },
            {
              "key": "percentageOfMarksOrCGPAInSpecificHonours",
              "type": "input",
              "className": "col-md-8",
              "templateOptions": {
                "label": " Candidate obtained percentage of Marks/ CGPA in specific Hons subject (as per his/her choice of admission) at graduation level.",
                "required": true,
                "attributes": { "style": "width:50%" }
              },
              /* "hideExpression": 'model.graduatedOrAppearingWith!="Honours" && model.graduatedOrAppearingWith!="B.L.I.Sc"', */
              "hideExpression": (model) => {
                if (model.graduatedOrAppearingWith != "Honours" && model.graduatedOrAppearingWith != "B.L.I.Sc") {
                  if (this.form.get('percentageOfMarksOrCGPAInSpecificHonours')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('percentageOfMarksOrCGPAInSpecificHonours').markAsUntouched();
                  }
                  delete model.percentageOfMarksOrCGPAInSpecificHonours;

                  return true;
                }
                return false;
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "className": 'section-label col-md-12',
              "template": "<div><strong>Candidate obtained percentage of Marks/ CGPA in specific Hons subject (as per his/her choice of admission) at graduation level</strong></div>"
            },
            {
              "className": 'section-label col-md-12',
              "template": '<hr />',
            },
            {
              "key": "studentAppearedOrPassedSystem",
              "type": "select",
              "className": "col-md-4",
              "templateOptions": {
                "label": "Students appeared/passed the Bachelor course in",
                "placeholder": "--select--",
                "options": [
                  { "value": "Yearly System", "label": "Yearly System" },
                  { "value": "Semester System", "label": "Semester System" },
                ],
                "required": false
              },
              "hideExpression": (model) => {
                if (model.qualificationStatus != "Appearing") {
                  if (this.form.get('studentAppearedOrPassedSystem')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('studentAppearedOrPassedSystem').markAsUntouched();
                  }
                  delete model.studentAppearedOrPassedSystem;

                  return true;
                }
                return false;
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled"
              }
            },
            {
              "key": "durationOfCourseinYearOrSemester",
              "type": "input",
              "className": "col-md-4",
              "templateOptions": {
                "required": true
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled",
                "templateOptions.placeholder": (): any => {
                  let val = this.model.studentAppearedOrPassedSystem;
                  if (val == "Yearly System") {
                    return "years";
                  }
                  if (val == "Semester System") {
                    return "Semester";
                  }
                },
                "templateOptions.label": (): any => {
                  let val = this.model.studentAppearedOrPassedSystem;
                  if (val == "Yearly System") {
                    return "Duration of the course in years";
                  }
                  if (val == "Semester System") {
                    return "No of Semesters";
                  }
                }
              },
              "hideExpression": (model) => {
                if (!model.studentAppearedOrPassedSystem) {
                  if (this.form.get('durationOfCourseinYearOrSemester')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('durationOfCourseinYearOrSemester').markAsUntouched();
                  }
                  delete model.durationOfCourseinYearOrSemester;

                  return true;
                }
                return false;
              }
            },
            {
              "key": "semesterMarks",
              "type": "repeat",
              "className": "col-md-12",
              "hideExpression": () => {
                if (this.model.qualificationStatus != 'Appearing') {
                  this.model.semesterMarks = [{}];
                  return true;
                }
                return false;
              },
              "templateOptions": {},
              "fieldArray": {
                "fieldGroup": [
                  {
                    "key": "semester/year",
                    "type": "select",
                    "className": "col-3",
                    "templateOptions": {
                      "label": "Sem / Year",
                      "options": [{ "value": "demo", "label": "demo" }],
                      "placeholder": "--select--",
                      "required": true,
                    },
                  },
                  {
                    "key": "totalMarks",
                    "type": "input",
                    "className": "col-3",
                    "templateOptions": {
                      "label": "Total marks/ grade point",
                      "type": "number",
                      "required": true,
                    }
                  },
                  {
                    "key": "obtianedMarks",
                    "type": "input",
                    "className": "col-3",
                    "templateOptions": {
                      "label": "Obtained marks/ grade point",
                      "type": "number",
                      "required": true,
                    }
                  }
                ],
              },
            },
            {
              "key": "totalPapers",
              "type": "input",
              "className": "col-md-3",
              "templateOptions": {
                "label": " Total Papers(Relevant Elective/Honours Papers)",
                "type": "number",
                "attributes": { "style": "width:70%" },
                "required": false
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled",
                "templateOptions.required": "field.parent.model.qualificationStatus == 'Appearing'"
              },
              "hideExpression": (model) => {
                if (model.qualificationStatus != "Appearing") {
                  if (this.form.get('totalPapers')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('totalPapers').markAsUntouched();
                  }
                  delete model.totalPapers;

                  return true;
                }
                return false;
              },
            },
            {
              "key": "totalMarksAllocated",
              "type": "input",
              "className": "col-md-4",
              "templateOptions": {
                "label": "Total Marks Allotted(Relevant Elective / Honours Papers) ",
                "type": "number",
                "attributes": { "style": "width:70%" },
                "required": false
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled",
                "templateOptions.required": "field.parent.model.qualificationStatus == 'Appearing'"
              },
              "hideExpression": (model) => {
                if (model.qualificationStatus != "Appearing") {
                  if (this.form.get('totalMarksAllocated')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('totalMarksAllocated').markAsUntouched();
                  }
                  delete model.totalMarksAllocated;

                  return true;
                }
                return false;
              },
            },
            {
              "key": "totalMarksSecured",
              "type": "input",
              "className": "col-md-4",
              "templateOptions": {
                "label": "Total Marks Secured(Relevant Elective / Honours Papers) ",
                "type": "number",
                "attributes": { "style": "width:70%" },
                "required": false
              },
              "expressionProperties": {
                "templateOptions.disabled": "formState.disabled",
                "templateOptions.required": "field.parent.model.qualificationStatus == 'Appearing'"
              },
              "hideExpression": (model) => {
                if (model.qualificationStatus != "Appearing") {
                  if (this.form.get('totalMarksSecured')) {
                    (this.options.parentForm as any).submitted = false;
                    this.form.get('totalMarksSecured').markAsUntouched();
                  }
                  delete model.totalMarksSecured;

                  return true;
                }
                return false;
              },
            },
            {
              "wrappers": ['panel'],
              "key": "qualificationDetails",
              "type": "statictable",
              "className": "col-md-12",
              "fieldArray": {
                "fieldGroup": [
                  {
                    "key": "examinationPassed",
                    "type": "input",
                    "className": "col-md-2",
                    "templateOptions": {
                      "required": false
                    },
                    "expressionProperties": {

                    }
                  },
                  {
                    "key": "universityOrBoard",
                    "type": "select",
                    "className": "col-md-3",
                    "templateOptions": {
                      "options": [
                        {
                          "value": "demo", "label": "demo"
                        }
                      ],
                      "placeholder": "--select--",
                      "required": false
                    },
                  },
                  {
                    "key": "yearOfPassing",
                    "type": "select",
                    "className": "col-md-3",
                    "templateOptions": {
                      "options": [
                        {
                          "value": "2022", "label": "2022"
                        }
                      ],
                      "placeholder": "--select--",
                      "required": false
                    },
                  },
                  {
                    "key": "subjectTaken",
                    "type": "select",
                    "className": "col-md-3",
                    "templateOptions": {
                      "options": [
                        {
                          "value": "demo", "label": "demo"
                        }
                      ],
                      "placeholder": "--select--",
                      "required": false
                    },
                  },
                  {
                    "key": "totalMarks",
                    "type": "input",
                    "className": "col-md-3",
                    "templateOptions": {
                      "type": "number",
                      "required": false
                    },
                  },
                  {
                    "key": "obtainedmarks",
                    "type": "input",
                    "className": "col-md-3",
                    "templateOptions": {
                      "type": "number",
                      "required": false
                    },
                  },
                  {
                    "key": "percentage",
                    "type": "input",
                    "className": "col-md-3",
                    "templateOptions": {
                      "type": "number",
                      "required": false
                    },
                  },
                  {
                    "key": "division",
                    "type": "input",
                    "className": "col-md-3",
                    "templateOptions": {
                      "type": "number",
                      "required": false
                    },
                  },
                ],
              },
            }
          ]
        }
      ],
    },
  ];

  submit() {
    console.log((this.model));
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }
}