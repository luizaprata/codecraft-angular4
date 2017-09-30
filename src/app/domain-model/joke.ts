export class Joke {
    setup:string;
    punchline: string;
    hide: boolean;

    constructor(p_setup, p_punchline){
        this.setup = p_setup;
        this.punchline = p_punchline;
        this.hide = true;
    }

    toggle(){
        this.hide = !this.hide;
    }
}
