import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLeakPageComponent } from './memory-leak-page.component';

describe('MemoryLeakPageComponent', () => {
  let component: MemoryLeakPageComponent;
  let fixture: ComponentFixture<MemoryLeakPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryLeakPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryLeakPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
