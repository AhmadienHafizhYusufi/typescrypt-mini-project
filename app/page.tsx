import type { User } from "@/types";
import CardDisplay from "./components/CardDisplay";

export default async function Home() {
  const userResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users: User[] = await userResponse.json();
  return (
    <main>
      <CardDisplay users={users} />
    </main>
  );
}
