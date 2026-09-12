"use server";
import clientPromise from "@/lib/db";
import { AssignmentTypes } from "@/DataTypes/AssignmentType";
import { redirect } from "next/navigation";
export default async function DELETE(formdata: FormData) {
  const courseName = formdata.get("courseName");
  const assignmentTitle = formdata.get("assignmentTitle");
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<AssignmentTypes>("Assignments");
  const Assignment = await management.findOne({name:courseName,Title:assignmentTitle});
  if (Assignment) {
    const deleted = await management.deleteOne(Assignment);
    console.log(deleted);
    redirect("/AdminAssignments");
  }
}

