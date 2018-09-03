import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { createPollMutation } from '../graphql/queries/poll.query';
import { PollInput } from '../graphql/interfaces/globalTypes';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(
    private apollo: Apollo
  ) { }

  createSurvey(poll: PollInput) {
    this.apollo.mutate({
      mutation: createPollMutation,
      variables: {
        poll
      }
    }).subscribe((next) => {
      console.log(next);
    })
  }
}
