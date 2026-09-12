"use server";

import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { redirect } from "next/navigation";

export default async function DELETE({
  searchParams,
}: {
  searchParams: Promise<{ regId: string[]; name: string[] }>;
}) {
  const { regId, name } = await searchParams;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");
  const student = await management.findOne({ regId: regId, name: name });
  if (student) {
    const deleted = management.deleteOne(student);
    console.log(deleted);
    redirect("/Students");
  }
}
