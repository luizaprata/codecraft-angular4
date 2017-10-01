import {Injectable, Inject} from '@angular/core';
import {OtherService} from "./other.service";

//@Injectable()// shortcut to inject all parameters of constructor as done below
export class SimpleService {
    constructor(@Inject(OtherService) otherService: OtherService) {

    }

}
