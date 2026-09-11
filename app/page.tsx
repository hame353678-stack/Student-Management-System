import Link from "next/link";

export default function Account() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome</h1>

          <p className="text-gray-500 mt-2">Choose an option to continue</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/Account/Login"
            className="w-full sm:w-1/2 p-3 text-center border rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600"
          >
            Login
          </Link>

          <Link
            href="/Account/SignUp"
            className="w-full sm:w-1/2 p-3 text-center border rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
}
