import AdminAddAssignment from "@/ServerActions/AdminAddAssignment";
export default function AddnewAssignment() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-lg bg-white border border-gray-300 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add New Assignment
        </h2>

        <form action={AdminAddAssignment} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="assignmentTitle"
              placeholder="Assignment Title"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="courseName"
              placeholder="Course Name"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="instructorName"
              placeholder="Course Instructor"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="submissionDate"
              placeholder="Submission Date"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg p-3 font-semibold hover:bg-blue-700"
          >
            Add Assignment
          </button>
        </form>
      </div>
    </div>
  );
}
