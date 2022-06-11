import { gql } from "@apollo/client";

export const allUsers = gql`
  query allUsers {
    totalUsers
    allUsers {
      ...userList
    }
    me {
      ...userList
    }
  }

  fragment userList on User {
    githubLogin
    name
    avatar
  }
`;
