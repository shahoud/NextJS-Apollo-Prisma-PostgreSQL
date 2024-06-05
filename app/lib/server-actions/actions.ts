"use server";

import { createOneUser } from "../data-crud/users/users-dbo";

export async function createUserAction(formData: FormData) {
  const username = formData.get("username");
  const email = formData.get("email");
  if (typeof username === "string" && typeof email === "string") {
    createOneUser({ username, email });
  } else {
    // Handle the case where either username or email is not a string
  }
}
