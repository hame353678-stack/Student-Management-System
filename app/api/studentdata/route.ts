export const dynamic = "force-dynamic";

import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET handler to get all students
// Example: localhost:3000/api/studentdata?secret=Pet123
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
    // Connect to MongoDB
    const client = await clientPromise;

    // Select database
    const database = client.db("StudentManagement");

    // Select Students collection
    const management = database.collection<studentType>("Students");

    // Get all students
    const students = await management.find({}).toArray();

    // Send students as response
    return NextResponse.json(students);
  } catch (err) {
    console.log(err);

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
}

// POST handler to add student in database

export async function POST(req: NextRequest) {
  try {
    // Get data sent by client
    const body: studentType = await req.json();

    // Connect to MongoDB
    const client = await clientPromise;

    // Select database
    const database = client.db("StudentManagement");

    // Select Students collection
    const management = database.collection<studentType>("Students");

    // Insert new student
    const newStudent = await management.insertOne(body);

    // Send successful response
    return NextResponse.json(
      {
        created: newStudent,
      },
      {
        status: 201,
      },
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
