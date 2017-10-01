import {Component, OnInit} from '@angular/core';
import {SimpleService} from "../../services/simple.service";

@Component({
    selector: 'app-injection-test',
    templateUrl: './injection-test.component.html',
    styleUrls: ['./injection-test.component.css']
})
export class InjectionTestComponent implements OnInit {

    constructor(private simpleService: SimpleService) {
        console.log('SimpleService', simpleService)
    }

    ngOnInit() {
    }

}
