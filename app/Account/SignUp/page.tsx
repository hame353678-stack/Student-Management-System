"use client";
import signup from "@/ServerActions/signup";

export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 md:p-6">
      <form
        action={signup}
        className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
      >
        {/* Header - Spans across both columns */}
        <div className="sm:col-span-2 text-center sm:text-left mb-2">
          <h2 className="text-2xl font-bold text-slate-800">
            Create an Account
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Please enter your details to sign up.
          </p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600 px-1">
            User ID
          </label>
          <input
            className="w-full h-11 px-4 text-sm font-medium rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
            type="text"
            name="id"
            placeholder="Enter Your ID"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600 px-1">
            Full Name
          </label>
          <input
            className="w-full h-11 px-4 text-sm font-medium rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600 px-1">
            Registration ID
          </label>
          <input
            className="w-full h-11 px-4 text-sm font-medium rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
            type="text"
            name="regId"
            placeholder="Enter Registration ID"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600 px-1">
            Department
          </label>
          <input
            className="w-full h-11 px-4 text-sm font-medium rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
            type="text"
            name="department"
            placeholder="Your Department"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600 px-1">
            Current Semester
          </label>
          <input
            className="w-full h-11 px-4 text-sm font-medium rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
            type="text"
            name="semester"
            placeholder="Your Current Semester"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600 px-1">
            CGPA
          </label>
          <input
            className="w-full h-11 px-4 text-sm font-medium rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
            type="text"
            name="CGPA"
            placeholder="Enter Your CGPA"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-xs font-semibold text-slate-600 px-1">
            Location
          </label>
          <input
            className="w-full h-11 px-4 text-sm font-medium rounded-lg bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
            type="text"
            name="Location"
            placeholder="Enter Your Location"
            required
          />
        </div>

        {/* Submit Button - Spans across both columns */}
        <button
          className="w-full h-11 mt-2 sm:col-span-2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99]"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
