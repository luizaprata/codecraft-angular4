import {Component, OnInit} from '@angular/core';
import {SearchItunesMusicService} from "../../services/search-itunes-music.service";
import {Observable} from "rxjs";
import {MusicItem} from "../../domain-model/music-item";
import {FormControl, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operator/debounceTime";
import {distinctUntilChanged} from "rxjs/operator/distinctUntilChanged";

@Component({
    selector: 'app-itunes-music-search-list',
    templateUrl: './itunes-music-search-list.component.html',
    styleUrls: ['./itunes-music-search-list.component.css']
})
export class ItunesMusicSearchListComponent implements OnInit {
    private seachField: FormControl;
    private results: Observable<MusicItem[]>;
    private loading = false;

    constructor(private itunes: SearchItunesMusicService) {

    }

    doMusicSearch(term: string) {
        this.loading = true;
        this.results = this.itunes.search(term);
    }

    ngOnInit() {
        this.seachField = new FormControl('', Validators.required);
        this.results = this.seachField.valueChanges
            .debounceTime(800)
            .distinctUntilChanged()
            .do( () => this.loading = true )
            .map(term => this.itunes.search(term))
            .switch()
            .do( () => this.loading = false )
    }

}
