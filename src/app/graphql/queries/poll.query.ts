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

export const PollResponseFragment = gql`
  fragment PollResponseFragment on PollResponse {
    userId
    pollId
    answerYN
    answerString
    answerNumeric
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

export const deletePollMutation = gql`
  mutation deletePoll($id: String!) {
    deletePoll(id: $id)
  }
`;

export const getPollsQuery = gql`
  query GetPollsWithResponses {
    pollsWithResponses {
      polls {
        id
        ...PollFragment
      }
      responses {
        id
        ...PollResponseFragment
      }
    }
  }
  ${PollFragment}
  ${PollResponseFragment}
`;
