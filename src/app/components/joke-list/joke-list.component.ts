import {
    Component, OnInit, AfterContentInit, ViewChild, AfterViewInit, EventEmitter, ElementRef, ViewChildren, QueryList,
    ContentChild, Output
} from '@angular/core';
import {JokeComponent} from "../joke/joke.component";
import {Joke} from "../../domain-model/joke";
import {JokeService} from "../../services/joke.service";


@Component({
    selector: 'app-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit, AfterContentInit {
    @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
    @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;

    @Output() jokeDeleted = new EventEmitter<Joke>();
    @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

    @ViewChild("header") headerEl: ElementRef;

    constructor(private jokeService: JokeService) {

    }


    ngOnInit() {
    }

    ngAfterContentInit() {
        console.log(`ngAfterContentInit ${this.jokeContentChild}`);
    }

    ngAfterViewInit() {
        console.log(this.jokeViewChild);
        let jokes: JokeComponent[] = this.jokeViewChildren.toArray()
        console.log(`List of jokes ${jokes}`);

        console.log(`ngAfterViewInit - header is ${this.headerEl}`);
        this.headerEl.nativeElement.textContent = "Best jokes ever"

    }

}
