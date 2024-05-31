import { gql } from "@apollo/client";

export const getAllUsersGql = gql`
  {
    users {
      id
      username
      email
    }
  }
`;
