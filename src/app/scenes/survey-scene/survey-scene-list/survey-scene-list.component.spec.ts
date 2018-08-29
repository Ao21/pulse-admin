import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySceneListComponent } from './survey-scene-list.component';

describe('SurveySceneListComponent', () => {
  let component: SurveySceneListComponent;
  let fixture: ComponentFixture<SurveySceneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySceneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySceneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
