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

export const CREATE_ONE_USER = gql`
  mutation CreateOneUser($data: UserCreateInput!) {
    createOneUser(data: $data) {
      id
      username
      email
    }
  }
`;
