import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateModelFormComponent } from './template-model-form.component';

describe('TemplateModelFormComponent', () => {
  let component: TemplateModelFormComponent;
  let fixture: ComponentFixture<TemplateModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
