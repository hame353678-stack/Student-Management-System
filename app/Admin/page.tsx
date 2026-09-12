import Link from "next/link";

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ secret: string }>;
}) {
  const { secret } = await searchParams;

  if (secret !== "Pet123") {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center">
          <h2 className="text-xl font-bold text-red-500">Invalid Page</h2>

          <p className="text-gray-500 text-sm mt-2">
            Please check your secret key.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5 sm:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage students, courses, assignments and quizzes.
            </p>
          </div>

          <Link
            href="/EnrolledStudents"
            className="text-center bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-600"
          >
            Enrolled Students
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            href="/AdminCourses"
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:border-blue-300 transition"
          >
            <h2 className="text-lg font-bold text-gray-800">Courses</h2>

            <p className="text-sm text-gray-500 mt-2">
              Add and manage courses.
            </p>

            <span className="inline-block mt-5 text-blue-500 font-medium">
              Manage Courses →
            </span>
          </Link>

          <Link
            href="/AdminAssignments"
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:border-green-300 transition"
          >
            <h2 className="text-lg font-bold text-gray-800">Assignments</h2>

            <p className="text-sm text-gray-500 mt-2">
              Add and manage assignments.
            </p>

            <span className="inline-block mt-5 text-green-500 font-medium">
              Manage Assignments →
            </span>
          </Link>

          <Link
            href="/AdminQuizes"
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md hover:border-purple-300 transition"
          >
            <h2 className="text-lg font-bold text-gray-800">Quizzes</h2>

            <p className="text-sm text-gray-500 mt-2">
              Add and manage quizzes.
            </p>

            <span className="inline-block mt-5 text-purple-500 font-medium">
              Manage Quizzes →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
