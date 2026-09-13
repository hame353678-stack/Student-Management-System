import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Welcome Section */}
      <section className="bg-purple-700 text-white text-center p-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Welcome To TechVision ACADEMY
        </h1>

        <p className="mt-4 text-lg">
          Learn practical skills and build your future with us.
        </p>

        <Link
          href="/Courses"
          className="inline-block mt-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300"
        >
          Explore Courses
        </Link>
      </section>

      {/* About Academy */}
      <main className="max-w-5xl mx-auto p-5">
        <section className="bg-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4">
            About Our ACADEMY
          </h1>

          <p className="text-gray-600 leading-7">
            Our academy provides practical and structured learning opportunities
            in programming, web development, data science, databases, artificial
            intelligence, and other technology-related fields.
          </p>
        </section>

        {/* Quick Access */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
            Student Learning Area
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link
              href="/Courses"
              className="bg-blue-500 text-white p-6 rounded-lg text-center hover:bg-blue-600"
            >
              <h3 className="text-xl font-bold mb-2">Courses</h3>
              <p>Explore our available courses.</p>
            </Link>

            <Link
              href="/Assignments"
              className="bg-green-500 text-white p-6 rounded-lg text-center hover:bg-green-600"
            >
              <h3 className="text-xl font-bold mb-2">Assignments</h3>
              <p>View your course assignments.</p>
            </Link>

            <Link
              href="/Quizes"
              className="bg-orange-500 text-white p-6 rounded-lg text-center hover:bg-orange-600"
            >
              <h3 className="text-xl font-bold mb-2">Quizzes</h3>
              <p>Check available quizzes.</p>
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-8 bg-purple-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Why Choose TechVision Academy?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-lg">Quality Courses</h3>
              <p className="text-gray-600 mt-2">
                Learn from structured courses.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-lg">Practical Learning</h3>
              <p className="text-gray-600 mt-2">Focus on practical skills.</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-lg">Student Support</h3>
              <p className="text-gray-600 mt-2">
                Get support throughout your learning journey.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-8">
        <h2 className="text-xl font-bold">TechVision Academy</h2>

        <p className="text-gray-300 mt-2">Learn • Build • Grow</p>

        <div className="mt-4">
          <Link href="/Courses" className="mx-2 hover:text-yellow-400">
            Courses
          </Link>

          <Link href="/Assignments" className="mx-2 hover:text-yellow-400">
            Assignments
          </Link>

          <Link href="/Quizes" className="mx-2 hover:text-yellow-400">
            Quizzes
          </Link>
        </div>

        <p className="text-gray-400 mt-5">
          © 2026 TechVision Academy | Privacy Policy | Terms
        </p>
      </footer>
    </div>
  );
}
