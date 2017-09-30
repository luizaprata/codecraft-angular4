import {Component, OnInit, AfterContentInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList, ContentChild} from '@angular/core';
import {JokeComponent} from "../joke/joke.component";
import {Joke} from "../domain-model/joke";


@Component({
    selector: 'app-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit, AfterContentInit {
    @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
    @ViewChildren(JokeComponent) jokeViewChildren:QueryList<JokeComponent>;

    @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

    @ViewChild("header") headerEl: ElementRef;

    jokes: Joke[]; // or Array.<Object>

    constructor() {

        this.jokes = [
            new Joke('setup 1', 'punchline 1'),
            new Joke('setup 2', 'punchline 2'),
            new Joke('setup 3', 'punchline 3'),
        ];
    }

    addJoke(joke) {
        console.log(joke);
        this.jokes.unshift(joke);
    }

    ngOnInit() {
    }

    ngAfterContentInit(){
        console.log(`ngAfterContentInit ${this.jokeContentChild}`);
    }

    ngAfterViewInit(){
        console.log(this.jokeViewChild);
        let jokes: JokeComponent[] = this.jokeViewChildren.toArray()
        console.log(`List of jokes ${jokes}`);

        console.log(`ngAfterViewInit - header is ${this.headerEl}`);
        this.headerEl.nativeElement.textContent = "Best jokes ever"

    }

}
