import { SurveySceneModule } from './survey-scene.module';

describe('SurveySceneModule', () => {
  let surveySceneModule: SurveySceneModule;

  beforeEach(() => {
    surveySceneModule = new SurveySceneModule();
  });

  it('should create an instance', () => {
    expect(surveySceneModule).toBeTruthy();
  });
});
