"use server";

import { AssignmentTypes } from "@/DataTypes/AssignmentType";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function DeleteAssignment(formdata: FormData) {
  const assignmentTitle = formdata.get("assignmentTitle") as string;
  const courseName = formdata.get("courseName") as string;

  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<AssignmentTypes>("Assignments");
  const Assignment = await management.findOne({
    courseName: courseName,
    assignmentTitle: assignmentTitle,
  });
  if (Assignment) {
    await management.deleteOne(Assignment);
    revalidatePath("/AdminAssignments");
  }
}
