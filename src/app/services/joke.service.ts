import {Inject} from '@angular/core';
import {Joke} from "../domain-model/joke";
import {AppSettings} from "../app-settings";

export class JokeService {

    jokes: Joke[];// or Array.<Object>

    constructor(@Inject(AppSettings.MAX_JOKES) public maxJokes: number) {
        this.jokes = [
            new Joke('setup 1', 'punchline 1'),
            new Joke('setup 2', 'punchline 2'),
            new Joke('setup 3', 'punchline 3'),
        ];
    }

    addJoke(joke) {
        // Remove one extra joke so we have room for the new one we are adding in.
        if (this.jokes.length > (this.maxJokes + 1)) {
            this.jokes.splice(this.maxJokes, this.jokes.length - (this.maxJokes + 1));
        }

        // Push new joke to the front
        this.jokes.unshift(joke);
    }

    deleteJoke(joke) {
        // debugger;
        let indexToDelete = this.jokes.indexOf(joke);
        if (indexToDelete !== -1) {
            this.jokes.splice(indexToDelete, 1);
        }
    }

}
