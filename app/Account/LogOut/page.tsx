import logout from "@/ServerActions/LogOut";

export default function LogOut() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        action={logout}
        className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-md p-6 sm:p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Logout
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your registration ID to logout.
        </p>

        <input
          type="text"
          name="regId"
          placeholder="Enter your registration ID"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full mt-4 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
