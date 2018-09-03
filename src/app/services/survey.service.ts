import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { createPollMutation, getPollsQuery, deletePollMutation } from '../graphql/queries/poll.query';
import { PollInput } from '../graphql/interfaces/globalTypes';
import { map } from 'rxjs/operators';
import { getPolls } from '../graphql/interfaces/getPolls';
import { GetPollsWithResponses_pollsWithResponses, GetPollsWithResponses } from '../graphql/interfaces/GetPollsWithResponses';


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
      },
      refetchQueries: [{
        query: getPollsQuery
      }]
    }).subscribe((next) => {
      console.log(next);
    })
  }

  deleteSurvey(id: string) {
    return this.apollo.mutate({
      mutation: deletePollMutation,
      variables: {
        id
      },
      refetchQueries: [{
        query: getPollsQuery,
      }]
    })
  }
  
  getSurveys() {
    return this.apollo.watchQuery  ({
      query: getPollsQuery
    }).valueChanges.pipe(
      map((x: {data: GetPollsWithResponses}) => x.data.pollsWithResponses)
    );
  }
}
