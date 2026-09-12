"use server";

import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Login(formdata: FormData) {
  const username = formdata.get("username") as string;
  const regId = formdata.get("regid") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");
  const student: studentType | null = await management.findOne({
    name: username,
    regId: regId,
  });

  if (!student) {
    console.log(`Not found student with Id : {id}`);
    redirect(`/Account/SignUp`);
  } else {
    revalidatePath(`/Home`);
    redirect(`/Home`);
  }
}
