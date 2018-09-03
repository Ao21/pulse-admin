import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySceneCreateComponent } from './survey-scene-create.component';

describe('SurveySceneCreateComponent', () => {
  let component: SurveySceneCreateComponent;
  let fixture: ComponentFixture<SurveySceneCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySceneCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySceneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
