import {Injectable} from '@angular/core';
import {MusicItem} from "../domain-model/music-item";
import {Http, Jsonp} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class SearchItunesMusicService {

    apiRoot: string = "https://itunes.apple.com/search";
    results: MusicItem[];
    loading: boolean;

    constructor(private jsonp: Jsonp) {
        this.results = [];
        this.loading = true;
    }

    search(term: string): Observable<MusicItem[]> {
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
        return this.jsonp.get(apiURL)
            .map(res => {
                let results = res.json().results.map(item => {
                    return new MusicItem(
                        item.trackName,
                        item.artistName,
                        item.trackViewUrl,
                        item.artworkUrl30,
                        item.artistId
                    );
                });
                return results;
            });
    }
}
