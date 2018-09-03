import gql from 'graphql-tag';

export const PollFragment = gql`
  fragment PollFragment on Poll {
    name
    scale
    startDate
    endDate
    question
    subjects
  }
`;

export const createPollMutation = gql`
  mutation createPoll($poll: PollInput!) {
    createPoll(poll: $poll) {
      ...PollFragment
    }
  }
  ${PollFragment}
`;
