export default async function ({
  searchParams,
}: {
  searchParams: Promise<{ secret: string }>;
}) {
  const { secret } = await searchParams;
  if (secret === "Pet123") {
    return <div>Admin</div>;
  } else {
    return <div>Invalid page</div>;
  }
}
