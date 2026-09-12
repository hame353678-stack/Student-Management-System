"use server";

import { QuizeType } from "@/DataTypes/QuizesType";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function AddnewQuize(formdata: FormData) {
  const QuizeTitle = formdata.get("QuizeTitle") as string;
  const courseName = formdata.get("courseName") as string;
  const instructorName = formdata.get("instructorName") as string;
  const Conduct = formdata.get("Conduct") as string;
  const data: QuizeType = {
    QuizeTitle: QuizeTitle,
    courseName: courseName,
    instructorName: instructorName,
    Conduct: Conduct,
  };

  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<QuizeType>("Quizes");
  const Quize = await management.insertOne(data);
  if (Quize) {
    revalidatePath("/Admin");
  }
}
