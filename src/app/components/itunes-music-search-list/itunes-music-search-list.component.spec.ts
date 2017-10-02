import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItunesMusicSearchListComponent } from './itunes-music-search-list.component';

describe('ItunesMusicSearchListComponent', () => {
  let component: ItunesMusicSearchListComponent;
  let fixture: ComponentFixture<ItunesMusicSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItunesMusicSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItunesMusicSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
