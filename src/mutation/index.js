import { gql } from "@apollo/client";

export const addFakeUsers = gql`
  mutation addFakeUsers($count: Int) {
    addFakeUsers(count: $count) {
      githubLogin
      name
      avatar
    }
  }
`;
