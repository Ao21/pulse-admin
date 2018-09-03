/* tslint:disable */
// This file was automatically generated and should not be edited.

import { Scale } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPollsWithResponses
// ====================================================

export interface GetPollsWithResponses_pollsWithResponses_polls {
  __typename: "Poll";
  id: string;
  name: string;
  scale: Scale;
  startDate: any;
  endDate: any;
  question: string;
  subjects: string[];
}

export interface GetPollsWithResponses_pollsWithResponses_responses {
  __typename: "PollResponse";
  id: string;
  userId: string;
  pollId: string;
  answerYN: boolean | null;
  answerString: string | null;
  answerNumeric: number | null;
}

export interface GetPollsWithResponses_pollsWithResponses {
  __typename: "PollAndReponse";
  polls: GetPollsWithResponses_pollsWithResponses_polls[];
  responses: GetPollsWithResponses_pollsWithResponses_responses[];
}

export interface GetPollsWithResponses {
  pollsWithResponses: GetPollsWithResponses_pollsWithResponses;
}
