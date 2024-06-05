import { User, UserCreateInput } from "@/prisma/generated/type-graphql";
import { connectAndCreateData, connectAndReturnData } from "../query-connector";
import { CREATE_ONE_USER, getAllUsersGql } from "./users-gql";
import { useMutation } from "@apollo/client";
import { getClient } from "../../apollo-client/ApolloClient";

// Define the 'UsersData' type to match the expected shape of GraphQL query result
type UsersData = {
  users: User[];
};

// Define a new type for the function return value
type UsersResult = {
  users: User[];
  error: Error | null;
};

export async function getAllUsers(): Promise<UsersResult> {
  try {
    const { data, error } = await connectAndReturnData<UsersData>(
      getAllUsersGql
    );

    //Check if there is an error in fetching data
    if (error) {
      throw error;
    }

    // Check if 'users' is present in the result data
    if (data && "users" in data) {
      // Return the result with 'users' data
      return { users: data.users, error: null };
    } else {
      throw new Error("Users data is not available");
    }
  } catch (error: any) {
    console.error("Error in getAllUsers() method:", error);
    // Return the result with the caught error
    return { users: [], error: new Error(error.message) };
  }
}

//Todo: make this funnction return a promise of User type and update the cache and make a notification to all clients
export async function createOneUser(userInput: UserCreateInput) {
  const apolloClient = getClient();
  const { data } = await apolloClient.mutate({
    mutation: CREATE_ONE_USER,
    variables: {
      data: { username: userInput.username, email: userInput.email },
    },
  });
  console.log(data);
}
