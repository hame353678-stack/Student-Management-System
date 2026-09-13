"use server";

import { QuizeType } from "@/DataTypes/QuizesType";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteQuize(formdata: FormData) {
  const courseName = formdata.get("courseName") as string;
  const QuizeTitle = formdata.get("QuizeTitle") as string;
  const instructorName = formdata.get("InstructorName") as string;

  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<QuizeType>("Quizes");
  const Quize = await management.findOne({
    courseName: courseName,
    QuizeTitle: QuizeTitle,
    instructorName: instructorName,
  });
  if (Quize) {
    management.deleteOne(Quize);
    revalidatePath("/AdminQuizes");
    redirect("/AdminQuizes");
  } else {
    redirect("/Admin?secret=Pet123");
  }
}
