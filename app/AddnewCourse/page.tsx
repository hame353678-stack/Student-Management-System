import AdminAddCourse from "@/ServerActions/AdminAddCourse";

export default function AddNewCourse() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-lg bg-white border border-gray-300 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add New Course
        </h2>

        <form action={AdminAddCourse} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="id"
              placeholder="Course ID"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="name"
              placeholder="Course Name"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="instructor"
              placeholder="Course Instructor"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="duration"
              placeholder="Course Duration"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="category"
              placeholder="Course Category"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="credits"
              placeholder="Course Credits"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg p-3 font-semibold hover:bg-blue-700"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}
