import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {JokeComponent} from './components/joke/joke.component';
import {JokeFormComponent} from './components/joke-form/joke-form.component';
import {JokeListComponent} from './components/joke-list/joke-list.component';
import {ObservableFormComponent} from './components/observable-form/observable-form.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AvatarPipe} from "./pipes/avatar.pipe";
import {CardHoverDirective} from './directives/card-hover.directive';
import {CleanPipe} from './pipes/clean.pipe';
import {ReactiveModelForm2Component} from "./components/reactive-model-form2/reactive-model-form2.component";
import {TemplateModelFormComponent} from "./components/template-model-form/template-model-form.component";
import {ReactiveModelFormComponent} from "./components/reactive-model-form/reactive-model-form.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        JokeComponent,
        JokeFormComponent,
        JokeListComponent,
        ObservableFormComponent,
        AvatarPipe,
        CardHoverDirective,
        CleanPipe,
        ReactiveModelFormComponent,
        ReactiveModelForm2Component,
        TemplateModelFormComponent
    ],
    imports: [
        BrowserModule, ReactiveFormsModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
