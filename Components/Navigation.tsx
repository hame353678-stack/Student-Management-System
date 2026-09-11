"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full bg-purple-900 px-3 py-3 sm:px-5 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 sm:gap-4 md:justify-between">
        <h1 className="w-full text-center text-xl font-bold text-white md:w-auto">
          Student Management System
        </h1>

        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          <Link
            href="/Home"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-purple-700 sm:px-4"
          >
            Home
          </Link>

          <Link
            href="/Courses"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-purple-700 sm:px-4"
          >
            Courses
          </Link>

          <Link
            href="/Assignments"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-purple-700 sm:px-4"
          >
            Assignments
          </Link>

          <Link
            href="/Quize"
            className="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-purple-700 sm:px-4"
          >
            Quizzes
          </Link>

          <Link
            href="/LogOut"
            className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600 sm:px-4"
          >
            LogOut
          </Link>
        </div>
      </div>
    </nav>
  );
}
