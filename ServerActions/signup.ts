"use server";

import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { redirect } from "next/navigation";

export default async function signup(formdata: FormData) {
  const id = formdata.get("id") as string;
  const username = formdata.get("name") as string;
  const regId = formdata.get("regId") as string;
  const department = formdata.get("department") as string;
  const semester = formdata.get("semester") as string;
  const CGPA = formdata.get("CGPA") as string;
  const Location = formdata.get("Location") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");

  const student: studentType = {
    id: parseInt(id),
    name: username,
    regId: regId,
    department: department,
    semester: semester,
    CGPA: Number(CGPA),
    Location: Location,
  };
  const result = await management.insertOne(student);
  console.log(result);
  redirect(`/Students/${student.id}`);
}
