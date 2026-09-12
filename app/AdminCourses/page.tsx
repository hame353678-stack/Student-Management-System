import clientPromise from "@/lib/db";
import AdminShowCourses from "@/Components/AdminShowCourses";
import { courseType } from "@/DataTypes/courseType";

export default async function Courses() {
  try {
    const client = await clientPromise;
    const database = client.db("StudentManagement");
    const management = database.collection<courseType>("Courses");

    const courses: courseType[] | null = await management.find({}).toArray();

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100 gap-5 p-5">
        {courses.map((course: courseType, idx: number) => (
          <AdminShowCourses course={course} key={idx} />
        ))}
      </div>
    );
  } catch (err) {
    console.log(err);

    return (
      <div className="p-5 text-center font-semibold text-gray-600">
        Not found courses
      </div>
    );
  }
}
