"use server";

export async function createUserAction(formData: FormData) {
  const rowFormData = Object.fromEntries(formData);
  console.log(rowFormData);
}
