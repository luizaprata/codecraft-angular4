import {Component, OnInit} from '@angular/core';
import {SearchItunesMusicService} from "../../services/search-itunes-music.service";
import {MusicItem} from "../../domain-model/music-item";

@Component({
    selector: 'app-itunes-music-search-list',
    templateUrl: './itunes-music-search-list.component.html',
    styleUrls: ['./itunes-music-search-list.component.css']
})
export class ItunesMusicSearchListComponent implements OnInit {

    results: MusicItem[];
    loading = false;

    constructor(private itunes: SearchItunesMusicService) {

    }

    doMusicSearch(term: string) {
        this.loading = true;
        this.itunes.search(term).subscribe((data) => {
            this.loading = false;
            this.results = data;
        })

    }

    ngOnInit() {

    }

}
