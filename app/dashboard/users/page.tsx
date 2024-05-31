import { gql } from "@apollo/client";
import { getClient } from "@/app/lib/apollo-client/ApolloClient";
import Link from "next/link";
import { User } from "@/prisma/generated/type-graphql";

const useQuery = gql`
  query {
    users {
      id
      username
      email
    }
  }
`;

export default async function UsersPage() {
  const { data } = await getClient().query({ query: useQuery });
  //console.log(data.users);
  return (
    <div>
      <h2>Users Page</h2>
      <div>
        {data.users.map((user: User) => (
          <div key={user.id}>
            <ul>
              <li>{user.id}</li>
              <li>{user.username}</li>
              <li>{user.email}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
