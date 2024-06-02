import { createUserAction } from "@/app/lib/server-actions/actions";
import Link from "next/link";

export default function CreateUserPage() {
  return (
    <div>
      <h2>CreateUser Page</h2>
      <div>
        <form action={createUserAction}>
          <label>Username</label>
          <input type="text" placeholder="Enter User Name" name="username" />
          <label>Email</label>
          <input type="text" placeholder="Enter Email " name="email" />
          <button type="submit">Create User</button>
        </form>
      </div>
      <Link href="/dashboard/users">Users Home Page</Link>
    </div>
  );
}
