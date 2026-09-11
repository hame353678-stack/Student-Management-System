export default async function AdminAddCourse(formdata: FormData) {
  const name = formdata.get("name") as string;
  const instructor = formdata.get("instructor") as string;
  const duration = formdata.get("duration") as string;
  const category = formdata.get("category") as string;
  const credits = formdata.get("credits") as string;
}
