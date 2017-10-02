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
import {OtherService} from "./services/other.service";
import {InjectionTestComponent} from './components/injection-test/injection-test.component';
import {SimpleService} from "./services/simple.service";
import {JokeService} from "./services/joke.service";
import {AppSettings} from "./app-settings";
import {HttpModule} from "@angular/http";
import {SearchItunesMusicService} from "./services/search-itunes-music.service";
import { ItunesMusicSearchListComponent } from './components/itunes-music-search-list/itunes-music-search-list.component';

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
        TemplateModelFormComponent,
        InjectionTestComponent,
        ItunesMusicSearchListComponent
    ],
    imports: [
        BrowserModule, ReactiveFormsModule, FormsModule, HttpModule
    ],
    providers: [
        SimpleService,
        OtherService,
        JokeService,
        SearchItunesMusicService,
        {provide: AppSettings.MAX_JOKES, useValue: 3}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
