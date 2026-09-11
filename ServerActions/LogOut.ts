"use server";

import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { redirect } from "next/navigation";

export default async function LogOut(formdata: FormData) {
  const regId = formdata.get("regId") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");
  const student: studentType | null = await management.findOne({
    regId: regId,
  });
  if (student) {
    const deleted = await management.deleteOne(student);
    console.log(deleted);
    redirect("/");
  }
}
