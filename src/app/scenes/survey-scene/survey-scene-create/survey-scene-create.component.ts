import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PollInput, Scale } from '../../../graphql/interfaces/globalTypes';
import { MatButtonToggleChange } from '@angular/material';
import { reduce } from 'lodash';
import { SurveyService } from '../../../services/survey.service';

@Component({
  selector: 'pulse-survey-scene-create',
  templateUrl: './survey-scene-create.component.html',
  styleUrls: ['./survey-scene-create.component.scss'],
})
export class SurveySceneCreateComponent implements OnInit {
  questionScale = Scale;
  poll: PollInput;
  detailsGroup: FormGroup;
  questionsGroup: FormGroup;
  recipientsGroup: FormGroup;
  scheduleGroup: FormGroup;

  allForms: FormArray;

  constructor(public fb: FormBuilder, private surveyService: SurveyService) {
    this.detailsGroup = this.fb.group({
      name: [null, Validators.required],
      description: [null],
    });

    this.questionsGroup = this.fb.group({
      scale: [null, Validators.required],
      question: [null, Validators.required],
    });

    this.recipientsGroup = this.fb.group({
      subjects: [[]],
    });

    this.scheduleGroup = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });

    this.allForms = this.fb.array([
      this.detailsGroup,
      this.questionsGroup,
      this.recipientsGroup,
      this.scheduleGroup,
    ]);
  }

  ngOnInit() {}

  completeForm() {
    const values = reduce(
      this.allForms.value,
      (accum, curr) => {
        return { ...accum, ...curr };
      },
      {},
    );
    this.surveyService.createSurvey(values);
  }

  setScale(change: MatButtonToggleChange) {
    this.questionsGroup.get('scale').setValue(change.value);
  }
}
