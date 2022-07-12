import { Component, ViewChild } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { SignaturePad } from 'angular2-signaturepad';


@Component({
    selector: 'formly-field-signaturePad',

    template: `
    <div>
        <signature-pad [options]='signaturePadOptions' (onBeginEvent)='drawStart()' (onEndEvent)='drawComplete()'></signature-pad>
    </div>
    <div>
        <!-- <button class="btn btn-primary" (click)="clear()">clear</button> -->
        <input type="button" (click)="clear()" value="clear" class="btn btn-primary">
    </div>
    `,

})

export class SignaturePadPage extends FieldType<FieldTypeConfig> {
    @ViewChild(SignaturePad)
    signaturePad!: SignaturePad;

    signaturePadOptions: Object = {
        'minWidth': 0.1,
        'maxWidth': 0.2,
        'canvasWidth': 500,
        'canvasHeight': 250,
        'penColor': 'rgb(66,127,244)',
        'backgroundColor': '#E6E6FA',
    };

    constructor() {
        super();
    }

    ngAfterViewInit() {

        this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    }

    drawComplete() {
        console.log(this.signaturePad.toDataURL());
        this.model.Signature = this.signaturePad.toDataURL();
    }

    drawStart() {
        console.log('begin drawing');
    }
    clear() {
        this.signaturePad.clear();
        this.model.Signature = "";
    }
}

