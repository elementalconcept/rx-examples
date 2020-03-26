import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectPageComponent } from './behavior-subject-page.component';

describe('BehaviorSubjectPageComponent', () => {
  let component: BehaviorSubjectPageComponent;
  let fixture: ComponentFixture<BehaviorSubjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorSubjectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorSubjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
