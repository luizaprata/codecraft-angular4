import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private dateVal: Date = new Date;
    private jsonVal = {lala: 'lalalla'};
    private imageUrl = null;

    private promise: Promise<string>;
    private observable: Observable<number>;

    ngOnInit() {

    }

    constructor() {
        this.promise = this.getPromise();
        this.observable = this.getObservable();
    }

    getObservable() {
        return Observable
            .interval(1000)
            .take(10)
            .map((v) => v * v);
    }

    getPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Promisse Complete!"), 3000);
        })
    }

}
