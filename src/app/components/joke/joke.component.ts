import {
    Component,
    OnInit,
    Input,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Output,
    EventEmitter
} from '@angular/core';
import {Joke} from "../../domain-model/joke";

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html'
})
export class JokeComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    @Input() joke: Joke;
    @Output() jokeDeleted = new EventEmitter<Joke>();


    constructor() {
    }

    deleteItem() {
        this.jokeDeleted.emit(this.joke);
    }

    ngOnChanges() {
        //console.log('ngOnChanges')
    }

    ngOnInit() {
        //console.log('ngOnInit')
    }

    ngDoCheck() {
        //console.log('ngDoCheck')
    }

    ngAfterContentInit() {
        //console.log('ngAfterContentInit')
    }

    ngAfterContentChecked() {
        //console.log('ngAfterContentChecked')
    }

    ngAfterViewInit() {
        //console.log('ngAfterViewInit')
    }

    ngAfterViewChecked() {
        //console.log('ngAfterViewChecked')
    }

    ngOnDestroy() {
        //console.log('ngOnDestroy')
    }

}
