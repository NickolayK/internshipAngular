import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeHttpComponent } from './practice-http.component';

describe('PracticeHttpComponent', () => {
  let component: PracticeHttpComponent;
  let fixture: ComponentFixture<PracticeHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
