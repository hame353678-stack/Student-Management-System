"use server";

import { courseType } from "@/DataTypes/courseType";
import clientPromise from "@/lib/db";
import { redirect } from "next/navigation";

export default async function DELETE({
  searchParams,
}: {
  searchParams: Promise<{
    courseId: string;
    courseName: string;
    duration: string;
  }>;
}) {
  const { courseId, courseName, duration } = await searchParams;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<courseType>("Courses");
  const course = await management.findOne({ courseId: courseId });
  if (course) {
    const deleted = management.deleteOne(course);
    console.log("Deleted:");
    redirect("/AdminCourses");
  }
}
