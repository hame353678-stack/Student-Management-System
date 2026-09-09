"use client";

import Logincomponent from "@/ServerActions/login";

export default function Login() {
  return (
    <form
      action={Logincomponent}
      className="h-100 w-80 grid grid-rows-3 gap-5 bg-white p-6 rounded-xl shadow-lg border"
    >
      <input
        className="font-semibold bg-gray-50 border-2 border-gray-300 rounded-lg px-4 focus:outline-none focus:border-blue-500 hover:border-blue-400"
        type="text"
        name="username"
        placeholder="Enter Your Name"
      />

      <input
        className="font-semibold bg-gray-50 border-2 border-gray-300 rounded-lg px-4 focus:outline-none focus:border-blue-500 hover:border-blue-400"
        type="text"
        name="regid"
        placeholder="Enter Registration ID"
      />

      <button
        className="font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
