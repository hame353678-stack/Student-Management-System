import Link from "next/link";
import AddminCourses from "../AdminCourses/page";

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ secret: string }>;
}) {
  const { secret } = await searchParams;

  if (secret === "Pet123") {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <Link
            href={"/Students"}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600"
          >
            Students
          </Link>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border">
          <AddminCourses />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center p-6 bg-white border rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-red-500">Invalid page</h2>
          <p className="text-gray-500 text-sm mt-1">
            Please check your secret key.
          </p>
        </div>
      </div>
    );
  }
}
