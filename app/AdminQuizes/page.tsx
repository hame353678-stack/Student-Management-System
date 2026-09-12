import clientPromise from "@/lib/db";
import { QuizeType } from "@/DataTypes/QuizesType";
import AdminShowQuizes from "@/Components/AdminShowQuizes";
import Link from "next/link";
export default async function AdminQuizes() {
  const client = await clientPromise;
  const database = client.db("StudentManagement");
  const management = database.collection<QuizeType>("Quizes");
  const Quizes: QuizeType[] | null = await management.find({}).toArray();
  if (Quizes) {
    return (
      <div className="p-4 max-w-7xl mx-auto">
        <Link
          href={`/AddNewQuize`}
          className="flex-1 text-center bg-blue-500 text-white py-2 px-3 rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors"
        >
          Add New Quiz
        </Link>
        <div className="text-xl font-bold text-center bg-cyan-100 text-gray-800 mb-4">
          Quizes
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Quizes.map((Quize, idx) => (
            <AdminShowQuizes Quize={Quize} key={idx} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="font-bold text-2xl text-center">Not found any Quize</div>
    );
  }
}
