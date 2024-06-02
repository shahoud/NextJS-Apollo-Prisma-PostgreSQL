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

export const createUser = gql`
  mutation Mutation($data: UserCreateInput!) {
    createOneUser(data: $data) {
      id
      username
      email
    }
  }
`;
