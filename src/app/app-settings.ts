import {InjectionToken} from "@angular/core";
import {Routes} from "@angular/router";

export class AppSettings {



    public static MAX_JOKES:InjectionToken<string>  = new InjectionToken<string>("token_max_jokes");
}
