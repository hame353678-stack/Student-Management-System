"use server";

import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Login(formdata: FormData) {
  const username = formdata.get("username") as string;
  const regId = formdata.get("regid") as string;
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");
  const student: studentType | null = await management.findOne({
    name: username,
    regId: regId,
  });

  if (!student) {
    console.log(`Not found student with Id : {id}`);
    redirect("/Account/SignUp");
  } else {
    const cookieStore = await cookies();
    cookieStore.set({
      name: "session",
      value: JSON.stringify({ id: student.regId, username: student.name }),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    redirect("/Home");
  }
}
