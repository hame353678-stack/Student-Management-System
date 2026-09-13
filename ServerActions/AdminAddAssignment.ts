"use server";

import { AssignmentTypes } from "@/DataTypes/AssignmentType";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function AdminAddAssignment(formdata: FormData) {
  const assignmentTitle = formdata.get("assignmentTitle") as string;
  const courseName = formdata.get("courseName") as string;
  const instructorName = formdata.get("instructorName") as string;
  const submissionDate = formdata.get("submissionDate") as string;

  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const Assignments = database.collection<AssignmentTypes>("Assignments");

  const data: AssignmentTypes = {
    assignmentTitle: assignmentTitle,
    courseName: courseName,
    instructorName: instructorName,
    submissionDate: submissionDate,
  };

  if (Assignments) {
    const Assignment = await Assignments.insertOne(data);
    console.log(Assignment);
    revalidatePath("/AdminAssignments");
    revalidatePath("/Assignments");
    redirect("/AdminAssignments");
  }
}
