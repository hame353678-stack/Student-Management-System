export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { studentType } from "@/DataTypes/studentType";
import clientPromise from "@/lib/db";

//GET handler to search student in a database on the basis of id :
export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  const client = await clientPromise;
  const { id } = await params;
  const database = client.db("StudentManagement");
  const management = database.collection("Students");
  const student = await management.findOne({ id: parseInt(id) });
  if (student) {
    return NextResponse.json(student);
  } else {
    return NextResponse.json({
      status: 500,
      message: `Student not found with id : ${id}`,
    });
  }
}

//Delete handler to delete student of specific id
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const client = await clientPromise;
  const { id } = await params;
  const database = client.db("StudentManagement");
  const management = database.collection("Students");
  const student = await management.deleteOne({
    id: parseInt(id),
  });
  if (student.deletedCount === 0) {
    return NextResponse.json({
      success: false,
      message: `No student found with id : ${id}`,
    });
  } else {
    return NextResponse.json({
      success: true,
      message: `Student deleted with id : ${id}`,
    });
  }
}

//PATCH handler to update the specific detail of student

export async function PATCH(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  const { id } = await params;
  const body: Partial<studentType> = await req.json();
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<studentType>("Students");
  const student = await management.updateOne(
    { id: parseInt(id) },
    { $set: body },
  );

  if (student.matchedCount === 0) {
    return NextResponse.json({
      success: false,
      message: `No student is founded with id : ${id}`,
    });
  } else {
    return NextResponse.json({
      success: true,
      message: `Successfully updated student with id : ${id}`,
    });
  }
}
