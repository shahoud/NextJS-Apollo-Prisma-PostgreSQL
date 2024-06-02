import Link from "next/link";
import { User } from "@/prisma/generated/type-graphql";
import { getAllUsers } from "@/app/lib/data-crud/users/users-dbo";

export default async function UsersPage() {
  const { users, error } = await getAllUsers();

  if (!error && users.length > 0) {
    return (
      <div>
        <h2>Users Page</h2>
        <div>
          {users.map((user: User) => (
            <div key={user.id}>
              <ul>
                <li>{user.id}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
              </ul>
            </div>
          ))}
        </div>
        <Link href="users/create">Create User</Link>
      </div>
    );
  }
}
