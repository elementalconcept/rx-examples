import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotColdPageComponent } from './hot-cold-page.component';

describe('HotColdPageComponent', () => {
  let component: HotColdPageComponent;
  let fixture: ComponentFixture<HotColdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotColdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotColdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
