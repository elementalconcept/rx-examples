import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectPageComponent } from './replay-subject-page.component';

describe('ReplaySubjectPageComponent', () => {
  let component: ReplaySubjectPageComponent;
  let fixture: ComponentFixture<ReplaySubjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaySubjectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaySubjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
