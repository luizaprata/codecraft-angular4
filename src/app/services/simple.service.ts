import {Injectable, Inject} from '@angular/core';
import {OtherService} from "./other.service";

@Injectable()// shortcut to inject all parameters of constructor @Inject(OtherService)
//
export class SimpleService {
    public otherService: OtherService;

    constructor(otherService: OtherService) {
        this.otherService = otherService;
    }

}
