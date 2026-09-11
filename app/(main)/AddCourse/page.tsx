import Addcourse from "@/ServerActions/Addcourse";

export default async function ({
  searchParams,
}: {
  searchParams: Promise<{
    courseId: string;
    courseName: string;
    duration: string;
  }>;
}) {
  const { courseId, courseName, duration } = await searchParams;

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-5 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-300 p-7">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Course Enrollment
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Fill in your information to enroll in this course.
        </p>

        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500">Course</p>
          <p className="font-semibold text-gray-800">{courseName}</p>

          <p className="text-sm text-gray-500 mt-2">Duration</p>
          <p className="font-semibold text-gray-800">{duration}</p>
        </div>

        <form action={Addcourse} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Student Name
            </label>

            <input
              type="text"
              name="StudentName"
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Registration ID
            </label>

            <input
              type="text"
              name="StudentId"
              placeholder="Enter your Registration ID"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input type="hidden" name="courseId" value={courseId} />
          <input type="hidden" name="courseName" value={courseName} />
          <input type="hidden" name="duration" value={duration} />

          <button
            type="submit"
            className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg cursor-pointer"
          >
            Enroll
          </button>
        </form>
      </div>
    </div>
  );
}
