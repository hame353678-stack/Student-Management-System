"use server";

import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function LogOut(formdata: FormData) {
  const regId = formdata.get("regId") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");
  const student: studentType | null = await management.findOne({
    regId: regId,
  });
  if (student) {
    const cookieStore = await cookies();

    cookieStore.set({
      name: "session",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 0, // Expire immediately
    });

    revalidatePath("/");
    redirect("/");
  }
}
