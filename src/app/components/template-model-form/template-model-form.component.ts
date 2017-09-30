import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-template-model-form',
    templateUrl: './template-model-form.component.html',
    styleUrls: ['./template-model-form.component.css']
})
export class TemplateModelFormComponent implements OnInit {

    email:string = "";

    langs: Object[] = [
        {name: 'English', value: 'en'},
        {name: 'French', value: 'fr'},
        {name: 'German', value: 'gr'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
