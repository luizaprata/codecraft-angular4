import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-model-form',
    templateUrl: './model-form.component.html',
    styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

    langs: Object[] = [
        {name: 'English', value: 'en'},
        {name: 'French', value: 'fr'},
        {name: 'German', value: 'gr'}
    ];
    firstName: FormControl = new FormControl('', Validators.required);
    lastName: FormControl = new FormControl('', Validators.required);
    email: FormControl = new FormControl('', [Validators.required, Validators.email]);
    password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    language: FormControl = new FormControl('');

    myFormGroup: FormGroup;

    constructor() {
        this.myFormGroup = new FormGroup({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName
            }),
            email: this.email,
            password: this.password,
            language: this.language
        })
    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.myFormGroup.valid) {
            this.myFormGroup.reset();
        }
    }
}
