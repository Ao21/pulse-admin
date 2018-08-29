/* tslint:disable */
// This file was automatically generated and should not be edited.

import { PollInput, Scale } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createPoll
// ====================================================

export interface createPoll_createPoll {
  __typename: "Poll";
  id: string;
  name: string;
  scale: Scale;
  startDate: any;
  endDate: any;
  question: string;
  subjects: string[];
}

export interface createPoll {
  createPoll: createPoll_createPoll;
}

export interface createPollVariables {
  poll: PollInput;
}
