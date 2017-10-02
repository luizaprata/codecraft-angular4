import {Component, OnInit} from '@angular/core';
import {MusicItem} from "../../domain-model/music-item";
import {SearchItunesMusicService} from "../../services/search-itunes-music.service";

@Component({
    selector: 'app-itunes-music-search-list',
    templateUrl: './itunes-music-search-list.component.html',
    styleUrls: ['./itunes-music-search-list.component.css']
})
export class ItunesMusicSearchListComponent implements OnInit {

    private results: MusicItem[];
    private loading = false;

    constructor(private itunes: SearchItunesMusicService) {

    }

    doMusicSearch(term: string) {
        this.loading = true;
        this.itunes.search(term)
            .subscribe((data) => {
                this.loading = false;
                this.results = data;
            })
    }

    ngOnInit() {

    }

}
