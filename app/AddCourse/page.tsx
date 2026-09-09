import Addcourse from "@/ServerActions/Addcourse";

export default async function () {
  return (
    <div>
      <p>Fill bellow form to enroll in the course</p>
      <form action={Addcourse}></form>
    </div>
  );
}
