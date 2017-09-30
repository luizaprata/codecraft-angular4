import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";


@Component({
    selector: 'app-observable-form',
    templateUrl: './observable-form.component.html',
    styleUrls: ['./observable-form.component.css']
})
export class ObservableFormComponent implements OnInit {
    form: FormGroup;
    comment = new FormControl("", Validators.required);
    name = new FormControl("", Validators.required);
    email = new FormControl("", [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
    ]);

    constructor(fb:FormBuilder) {
        this.form = fb.group({
            comment : this.comment,
            name: this.name,
            email:this.email
        });

        this.form.valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .filter(data => this.form.valid)
            .map(data => {
                data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
                return data
            })
            .map(data => {
                data.lastUpdateTS = new Date();
                return data
            })
            .subscribe( data => console.log(JSON.stringify(data)));
    }

    onSubmit() {
        console.log("Form submitted!");
    }

    ngOnInit() {
    }

}
