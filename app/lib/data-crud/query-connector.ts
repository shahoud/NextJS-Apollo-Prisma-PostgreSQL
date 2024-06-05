import { getClient } from "@/app/lib/apollo-client/ApolloClient";
import { DocumentNode } from "graphql";
import { ApolloQueryResult, FetchResult } from "@apollo/client";

// Define the function with a generic type parameter 'T'
export async function connectAndReturnData<T>(
  gqlQuery: DocumentNode
): Promise<ApolloQueryResult<T>> {
  return await getClient().query<T>({ query: gqlQuery });
}

export async function connectAndCreateData<T>(
  gqlMutation: DocumentNode
): Promise<FetchResult<T>> {
  return await getClient().mutate<T>({ mutation: gqlMutation });
}
