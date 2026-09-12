"use client";

import Logincomponent from "@/ServerActions/login";

export default function Login() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 px-4">
      <form
        action={Logincomponent}
        className="w-full max-w-sm min-h-100 flex flex-col gap-5 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>

        <input
          className="w-full font-semibold bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 hover:border-blue-400"
          type="text"
          name="username"
          placeholder="Enter Your Name"
          required
        />

        <input
          className="w-full font-semibold bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 hover:border-blue-400"
          type="text"
          name="regid"
          placeholder="Enter Registration ID"
          required
        />

        <button
          className="w-full font-semibold bg-blue-500 text-white rounded-lg py-3 hover:bg-blue-600 transition"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
