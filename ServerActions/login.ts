"use server";

import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { redirect } from "next/navigation";

export default async function Login(formdata: FormData) {
  const username = formdata.get("username") as string;
  const regid = formdata.get("regid") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");
  const student: studentType | null = await management.findOne({
    name: username,
    regId: regid,
  });
  const id = student?.id;
  if (!student) {
    redirect(`/Account/SignUp`);
  } else {
    redirect(`/Students/${id}`);
  }
}
