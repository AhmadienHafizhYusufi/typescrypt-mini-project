import CardDisplay from "./components/CardDisplay";
import { User } from "@/types/types";

export default async function Home() {
  const userResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users: User[] = await userResponse.json();
  return (
    <main className="text-black">
      <CardDisplay users={users} />
    </main>
  );
}
