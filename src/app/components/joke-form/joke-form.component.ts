import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Joke} from "../../domain-model/joke";

// <joke-form> ////////////
// @Output decorator
// EventEmitter and $event
// user # to creata Template Local Variables

@Component({
    selector: 'app-joke-form',
    templateUrl: './joke-form.component.html',
    styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
    form: FormGroup;
    @Output() jokeCreated = new EventEmitter<Joke>();

    setup:FormControl = new FormControl('', Validators.required);
    punchline:FormControl = new FormControl('', Validators.required);

    onAdd(setup: string, punchline: string) {
        this.jokeCreated.emit(new Joke(setup, punchline))
    }

    constructor() {
        this.form = new FormGroup({
            setup:this.setup,
            punchline:this.punchline
        });
    }

    ngOnInit() {
    }

}
