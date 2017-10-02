import { TestBed, inject } from '@angular/core/testing';

import { SearchItunesMusicService } from './search-itunes-music.service';

describe('SearchItunesMusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchItunesMusicService]
    });
  });

  it('should be created', inject([SearchItunesMusicService], (service: SearchItunesMusicService) => {
    expect(service).toBeTruthy();
  }));
});
