import { User } from "@/prisma/generated/type-graphql";
import { connectAndReturnData } from "../query-connector";
import { getAllUsersGql } from "./users-gql";

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
