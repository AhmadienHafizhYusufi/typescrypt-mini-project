"use client";

import { User } from "@/types";
import UserCard from "./UserCard";

export default function CardDisplay({ users }: { users: User[] }) {
  return (
    <article>
      <section className="flex flex-col items-center gap-2">
        {users.map((user) => (
          <UserCard key={user.username} user={user} />
        ))}
      </section>
      {/* page selection section */}
      <section>
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(5)].map((_, i) => (
            <button key={i} className="bg-gray-200 rounded-md px-2 py-1">
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </article>
  );
}
