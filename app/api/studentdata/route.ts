export const dynamic = "force-dynamic";
import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

//Get handler to get all the students on localhost:3000\\api\studentdata
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const database = client.db("StudentManagement");
    const management = database.collection<studentType>("Students");
    const students = await management.find({}).toArray();
    return NextResponse.json(students);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { success: false, message: "We ran into an error" },
      { status: 500 },
    );
  }
}
//POST handler to add student in data base

export async function POST(req: NextRequest) {
  try {
    const body: studentType = await req.json();
    const client = await clientPromise;
    const database = client.db("StudentManagement");
    const management = database.collection<studentType>("Students");
    const newStudent = await management.insertOne(body);
    return NextResponse.json({ created: newStudent }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
