import { User } from "@/types/types";

export default function UserCard({ user }: { user: User }) {
  return (
    <article className="flex flex-col items-center justify-center w-[35rem] h-full p-4 space-y-4 bg-white rounded-lg shadow-md">
      <section className="flex flex-col items-center justify-around w-full h-1/2 space-y-4">
        <img
          className="w-20 h-full rounded-full"
          src={
            "https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=" +
            user.username
          }
        />
        <section className="flex flex-col items-center justify-center w-1/3 h-full">
          <h2 className="text-xl font-bold text-black">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </section>
        <section className="flex flex-col items-center">
          <p className="text-sm text-gray-500">{user.phone}</p>
          <p className="text-sm text-gray-500">{user.address.street}</p>
          <p className="text-sm text-gray-500">{user.address.city}</p>
          <p className="text-sm text-gray-500">{user.address.zipcode}</p>
        </section>
      </section>
    </article>
  );
}
