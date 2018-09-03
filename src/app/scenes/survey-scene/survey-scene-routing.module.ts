import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveySceneListComponent } from './survey-scene-list/survey-scene-list.component';
import { SurveySceneCreateComponent } from './survey-scene-create/survey-scene-create.component';

const routes: Routes = [
  {
    path: '',
    component: SurveySceneListComponent,
  },
  {
    path: 'create',
    component: SurveySceneCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveySceneRoutingModule {}
