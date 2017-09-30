import {Component} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private dateVal: Date = new Date;
    private jsonVal = {lala: 'lalalla'};
    private imageUrl = null;

    private promise: Promise<string>;
    private observable: Observable<number>;

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
