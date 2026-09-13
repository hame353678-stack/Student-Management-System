export const dynamic = "force-dynamic";
import { courseType } from "@/DataTypes/courseType";
import clientPromise from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

//Get handler to get all the enrolledstudents on localhost:3000\\api\enrolledstudent
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const database = client.db("StudentManagement");
    const management = database.collection<courseType>("Courses");
    const courses = await management.find({}).toArray();
    return NextResponse.json(courses);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { success: false, message: "We ran into an error" },
      { status: 500 },
    );
  }
}
