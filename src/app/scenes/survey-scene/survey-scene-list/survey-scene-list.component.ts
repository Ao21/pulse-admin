import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../../services/survey.service';
import { tap, map } from 'rxjs/operators';
import { GetPollsWithResponses_pollsWithResponses } from '../../../graphql/interfaces/GetPollsWithResponses';

@Component({
  selector: 'pulse-survey-scene-list',
  templateUrl: './survey-scene-list.component.html',
  styleUrls: ['./survey-scene-list.component.scss'],
})
export class SurveySceneListComponent implements OnInit {
  columnsToDisplay = ['name', 'startDate', 'endDate', 'type', 'responses', 'actions'];

  data: any;
  responses = [];

  constructor(private surveyService: SurveyService) {
    this.data = this.surveyService.getSurveys().pipe(
      tap((x: GetPollsWithResponses_pollsWithResponses) => {
        this.responses = x.responses.reduce((prev: any, val) => {
          if (!prev[val.pollId]) {
            prev[val.pollId] = [val];
          } else {
            prev[val.pollId] = [...prev[val.pollId], val];
          }
          return prev;
        }, []);
      }),
      map(x => x.polls),
    );
  }

  ngOnInit() { }
  
  getResponses(id) {
    return this.responses[id] ? this.responses[id] : [];
  }

  deleteSurvey(id: string) {
    this.surveyService.deleteSurvey(id).subscribe(next => {
      console.log(next);
    });
  }
}
