import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmutablePageComponent } from './immutable-page.component';

describe('ImmutablePageComponent', () => {
  let component: ImmutablePageComponent;
  let fixture: ComponentFixture<ImmutablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmutablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmutablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
