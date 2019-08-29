import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeRoutingComponent } from './practice-routing.component';

describe('PracticeRoutingComponent', () => {
  let component: PracticeRoutingComponent;
  let fixture: ComponentFixture<PracticeRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
