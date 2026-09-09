'use client';
import signup from "@/ServerActions/signup";

export default function SignUp() {
  return (
    <form action={signup} className="h-200 grid grid-cols-2 gap-3 w-150 bg-fuchsia-400">

 <input
        className="h-20 w-100 font-semibold bg-amber-100 hover:border-red-500 border-3"
        type="text"
        name="id"
        placeholder="Enter Your ID"
      />

      <input
        className="h-20 w-100 font-semibold bg-amber-100 hover:border-red-500 border-3"
        type="text"
        name="name"
        placeholder="Enter Your Name"
      />
      <input
        className="h-20 w-100 font-semibold bg-amber-100 hover:border-red-500 border-3"
        type="text"
        name="regId"
        placeholder="Enter Registeration ID"
      />

      <input
        className="h-20 w-100 font-semibold bg-amber-100 hover:border-red-500 border-3"
        type="text"
        name="department"
        placeholder="Your Department"
      />

      <input
        className="h-20 w-100 font-semibold bg-amber-100 hover:border-red-500 border-3"
        type="text"
        name="semester"
        placeholder="Your Current Semester"
      />

      <input
        className="h-20 w-100 font-semibold bg-amber-100 hover:border-red-500 border-3"
        type="text"
        name="CGPA"
        placeholder="Enter Your CGPA"
      />

      <input
        className="h-20 w-100 font-semibold bg-amber-100 hover:border-red-500 border-3"
        type="text"
        name="Location"
        placeholder="Enter Your Location"
      />

      <button
        className="h-100  font-semibold bg-amber-100 hover:border-red-500"
        type="submit"
      >
        SignUp
      </button>
    </form>
  );
}
