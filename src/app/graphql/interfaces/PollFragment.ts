/* tslint:disable */
// This file was automatically generated and should not be edited.

import { Scale } from "./globalTypes";

// ====================================================
// GraphQL fragment: PollFragment
// ====================================================

export interface PollFragment {
  __typename: "Poll";
  id: string;
  name: string;
  scale: Scale;
  startDate: any;
  endDate: any;
  question: string;
  subjects: string[];
}
