/* tslint:disable */
// This file was automatically generated and should not be edited.

import { Scale } from "./globalTypes";

// ====================================================
// GraphQL query operation: getPolls
// ====================================================

export interface getPolls_polls {
  __typename: "Poll";
  id: string;
  name: string;
  scale: Scale;
  startDate: any;
  endDate: any;
  question: string;
  subjects: string[];
}

export interface getPolls {
  polls: getPolls_polls[];
}
