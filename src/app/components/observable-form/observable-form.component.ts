import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-observable-form',
    templateUrl: './observable-form.component.html',
    styleUrls: ['./observable-form.component.css']
})
export class ObservableFormComponent implements OnInit {

    searchField: FormControl;
    searches: string[] = [];

    constructor() {
    }

    ngOnInit() {
        this.searchField = new FormControl();

        this.searchField.valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(term => {
                this.searches.push(term);
            })
    }

}
