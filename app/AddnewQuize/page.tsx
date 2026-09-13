import AddNewQuize from "@/ServerActions/AdminAddQuize";

export default function AddnewQuize() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-lg bg-white border border-gray-300 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add New Quizz
        </h2>

        <form action={AddNewQuize} className="flex flex-col gap-4">
          <input
            type="text"
            name="QuizeTitle"
            placeholder=" Enter Quize Title"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="CourseName"
            placeholder="Enter Course Name"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="instructorName"
            placeholder="Enter instructorName"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="Conduct"
            placeholder="Conduct Date"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg p-3 font-semibold hover:bg-blue-700"
          >
            Add Quizz
          </button>
        </form>
      </div>
    </div>
  );
}
