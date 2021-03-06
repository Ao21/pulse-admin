import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatCardModule, MatTableModule, MatMenuModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SurveySceneCreateComponent } from './survey-scene-create/survey-scene-create.component';
import { SurveySceneListComponent } from './survey-scene-list/survey-scene-list.component';
import { SurveySceneRoutingModule } from './survey-scene-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    SurveySceneRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatDatepickerModule
  ],
  declarations: [SurveySceneListComponent, SurveySceneCreateComponent]
})
export class SurveySceneModule { }
