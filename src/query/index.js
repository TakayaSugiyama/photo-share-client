import { gql } from "@apollo/client";

export const allUsers = gql`
  query allUsers {
    totalUsers
    allUsers {
      githubLogin
      name
      avatar
    }
  }
`;
