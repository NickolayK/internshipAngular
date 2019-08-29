import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeWithFormsComponent } from './practice-with-forms.component';

describe('PracticeWithFormsComponent', () => {
  let component: PracticeWithFormsComponent;
  let fixture: ComponentFixture<PracticeWithFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeWithFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeWithFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
