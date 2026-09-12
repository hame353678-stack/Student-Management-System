"use server";

import { enrollementType } from "@/DataTypes/enrolementType";
import { redirect } from "next/navigation";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function Addcourse(formdata: FormData) {
  const id = formdata.get("StudentId") as string;
  const courseId = formdata.get("courseId") as string;
  const courseName = formdata.get("courseName") as string;
  const duration = formdata.get("duration") as string;

  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const students = database.collection("Students");

  const student = await students.findOne({
    id: parseInt(id),
  });

  if (!student) {
    console.log(`No student is found with ID: ${id}`);
    return;
  }

  const management = database.collection<enrollementType>("Enrolements");
  const studentId = student.id;

  const alreadyEnrolled = await management.findOne({
    studentId: studentId,
    courseId: parseInt(courseId),
  });

  // 1. Create a variable to flag if we need to redirect
  let shouldRedirect = false;

  if (alreadyEnrolled) {
    console.log("Student is already enrolled in this course");
    shouldRedirect = true;
  } else {
    // 2. Wrap the insertion inside the "else" block so it only runs if NOT enrolled
    const data: enrollementType = {
      studentId: studentId,
      courseId: parseInt(courseId),
      studentregId: student.regId,
      studentname: student.name,
      courseName: courseName,
      duration: duration,
    };

    const enrolled = await management.insertOne(data);
    console.log("Successfully enrolled:", enrolled);
    shouldRedirect = true;
  }

  // 3. Perform revalidation and redirection at the very end of the function
  if (shouldRedirect) {
    revalidatePath("/courses");
    redirect("/courses");
  }
}
