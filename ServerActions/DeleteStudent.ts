"use server";

import { enrollementType } from "@/DataTypes/enrolementType";
import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function DeleteStudent(formdata: FormData) {
  const regId = formdata.get("regId") as string;
  const name = formdata.get("name") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<enrollementType>("Enrolements");
  const student = await management.findOne({ name: name, regId: regId });
  if (student) {
    await management.deleteOne(student);
    revalidatePath("/EnrolledStudents");
  }
}
