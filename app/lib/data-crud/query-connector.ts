import { getClient } from "@/app/lib/apollo-client/ApolloClient";
import { DocumentNode } from "graphql";
import { ApolloQueryResult } from "@apollo/client";

// Define the function with a generic type parameter 'T'
export async function connectAndReturnData<T>(
  gqlQuery: DocumentNode
): Promise<ApolloQueryResult<T>> {
  return await getClient().query<T>({ query: gqlQuery });
}
