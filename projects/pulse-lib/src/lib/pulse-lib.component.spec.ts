import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseLibComponent } from './pulse-lib.component';

describe('PulseLibComponent', () => {
  let component: PulseLibComponent;
  let fixture: ComponentFixture<PulseLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
