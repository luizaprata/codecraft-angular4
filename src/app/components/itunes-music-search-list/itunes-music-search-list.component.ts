import {Component, OnInit} from '@angular/core';
import {SearchItunesMusicService} from "../../services/search-itunes-music.service";
import {Observable} from "rxjs";
import {MusicItem} from "../../domain-model/music-item";
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-itunes-music-search-list',
    templateUrl: './itunes-music-search-list.component.html',
    styleUrls: ['./itunes-music-search-list.component.css']
})
export class ItunesMusicSearchListComponent implements OnInit {
    private seachField: FormControl;
    private results: Observable<MusicItem[]>;
    private loading = false;

    constructor(private itunes: SearchItunesMusicService,
                private route: ActivatedRoute,
                private router: Router) {
        this.route.params.subscribe(params => {
            if (params['term']) {
                this.doMusicSearch(params['term'])
            }
        })
    }

    onSearch(term: string) {
        this.router.navigate(['search', {term: term}])
    }

    doMusicSearch(term: string) {
        this.loading = true;
        console.log(':::::', term);

        this.results = this.itunes.search(term);
    }

    ngOnInit() {
        this.seachField = new FormControl('', Validators.required);
        this.results = this.seachField.valueChanges
            .debounceTime(800)
            .distinctUntilChanged()
            .do(() => this.loading = true)
            .map(term => {
                return this.itunes.search(term)
            })
            .switch()
            .do(() => {
                // this.router.navigate(['search', {term: term}])
                this.loading = false
            });

        //this.seachField.valueChanges
        //    .debounceTime(800)
        //    .distinctUntilChanged()
        //    .map(term => this.router.navigate(['search', {term: term}]))
        //    .do(() => console.log('????'))
    }

}
