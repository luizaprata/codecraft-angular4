import {Component, OnInit} from '@angular/core';
import {Signup} from "../../domain-model/signup";

@Component({
    selector: 'app-template-model-form',
    templateUrl: './template-model-form.component.html',
    styleUrls: ['./template-model-form.component.css']
})
export class TemplateModelFormComponent implements OnInit {

    model: Signup = new Signup();

    langs: Object[] = [
        {name: 'English', value: 'en'},
        {name: 'French', value: 'fr'},
        {name: 'German', value: 'gr'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log("whisper in your ear")
    }

}
