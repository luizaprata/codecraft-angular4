import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionTestComponent } from './injection-test.component';

describe('InjectionTestComponent', () => {
  let component: InjectionTestComponent;
  let fixture: ComponentFixture<InjectionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
