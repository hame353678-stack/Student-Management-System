"use server";

import { enrollementType } from "@/DataTypes/enrolementType";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function DeleteStudent(formdata: FormData) {
  const studentregId = formdata.get("studentregId") as string;
  const studentname = formdata.get("studentname") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<enrollementType>("Enrolements");
  const student = await management.findOne({
    studentname: studentname,
    studentregId: studentregId,
  });
  if (student) {
    await management.deleteOne(student);
    revalidatePath("/EnrolledStudents");
  }
}
