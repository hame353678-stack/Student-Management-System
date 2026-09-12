"use server";

import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { redirect } from "next/navigation";

export default async function DeleteStudent(formdata: FormData) {
  const regId = formdata.get("regId") as string;
  const name = formdata.get("name") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");
  const student = await management.findOne({ name: name, regId: regId });
  if (student) {
    const deleted = await management.deleteOne(student);
    console.log(deleted);
    redirect("/Admin?secret=Pet123");
  }
}
