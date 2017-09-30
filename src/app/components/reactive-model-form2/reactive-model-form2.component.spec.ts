import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveModelForm2Component } from './reactive-model-form2.component';

describe('ReactiveModelForm2Component', () => {
  let component: ReactiveModelForm2Component;
  let fixture: ComponentFixture<ReactiveModelForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveModelForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveModelForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
