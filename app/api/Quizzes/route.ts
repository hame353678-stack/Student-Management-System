export const dynamic = "force-dynamic";
import { QuizeType } from "@/DataTypes/QuizesType";
import clientPromise from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

//Get handler to get all the enrolledstudents on localhost:3000\\api\enrolledstudent
export async function GET(req: NextRequest) {
  // Get secret from URL
  const secret = req.nextUrl.searchParams.get("secret");

  // Check secret
  if (secret !== "Pet123") {
    return NextResponse.json(
      {
        success: false,
        message: "We ran into an error",
      },
      {
        status: 500,
      },
    );
  }

  try {
    const client = await clientPromise;
    const database = client.db("StudentManagement");
    const management = database.collection<QuizeType>("Quizes");
    const Quizzes = await management.find({}).toArray();
    return NextResponse.json(Quizzes);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { success: false, message: "We ran into an error" },
      { status: 500 },
    );
  }
}
