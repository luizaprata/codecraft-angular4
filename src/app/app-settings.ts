import {InjectionToken} from "@angular/core";

export class AppSettings {
    public static MAX_JOKES:InjectionToken  = new InjectionToken<string>("token_max_jokes");
}
