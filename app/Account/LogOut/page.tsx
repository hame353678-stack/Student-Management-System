import logout from "@/ServerActions/LogOut";
export default function LogOut() {
  return (
    <form action={logout}>
      <input
        type="text"
        name="regId"
        placeholder="Enter your registeration ID"
      />
      <button type="submit">LogOut</button>
    </form>
  );
}
