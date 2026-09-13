"use server";

import { courseType } from "@/DataTypes/courseType";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function AdminAddCourse(formdata: FormData) {
  const id = formdata.get("id") as string;
  const name = formdata.get("name") as string;
  const instructor = formdata.get("instructor") as string;
  const duration = formdata.get("duration") as string;
  const category = formdata.get("category") as string;
  const credits = formdata.get("credits") as string;

  const data: courseType = {
    id: Number(id),
    name: name,
    instructor: instructor,
    duration: duration,
    category: category,
    credits: Number(credits),
  };

  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<courseType>("Courses");
  const course = await management.insertOne(data);
  if (course) {
    console.log(course);
    revalidatePath("/AdminCourses");
    redirect("/AdminCourses");
  } else {
    redirect("/Home");
  }
}
