/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * What kind of poll is it
 */
export enum Scale {
  HAPPYSAD = "HAPPYSAD",
  MOOD = "MOOD",
  OPTIONS = "OPTIONS",
}

export interface PollInput {
  name: string;
  description?: string | null;
  question: string;
  questionOptions?: string[] | null;
  scale: Scale;
  startDate: any;
  endDate: any;
  subjects: string[];
}

//==============================================================
// END Enums and Input Objects
//==============================================================
