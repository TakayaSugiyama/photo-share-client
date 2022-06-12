import { gql } from "@apollo/client";

export const newUser = gql`
  subscription {
    newUser {
      githubLogin
      name
      avatar
    }
  }
`;
