"use server";

import { courseType } from "@/DataTypes/courseType";
import clientPromise from "@/lib/db";
import { redirect } from "next/navigation";

export default async function DELETE(formdata: FormData) {
  const id = formdata.get("id") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<courseType>("Courses");
  const course = await management.findOne({ id: parseInt(id) });
  if (course) {
    const deleted = management.deleteOne(course);
    console.log(deleted);
    redirect("/AdminCourses");
  }
}
