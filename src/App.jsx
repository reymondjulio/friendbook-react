import { useState } from "react";
import { Link } from "react-router-dom";

import { FriendCard } from "./components/friend-card";

import { dataFriends } from "./data/friends";

export default function App() {
  const [friends, setFriends] = useState(dataFriends);

  function confirmFriend(id) {
    const newFriends = friends.map((friend) => {
      if (friend.id === id) {
        return { ...friend, isConfirmed: true };
      }
      return friend;
    });

    setFriends(newFriends);
  }

  function deleteFriend(id) {
    const updatedFriends = friends.filter((friend) => friend.id !== id);
    setFriends(updatedFriends);
  }

  return (
    <main className="bg-slate-100 ">
      <header className="bg-white">
        <h1 className="text-center text-3xl font-bold py-4 text-blue-500 shadow-md">
          Friendbook
        </h1>
      </header>

      {/* <pre>{JSON.stringify(friends, null, 2)}</pre> */}

      {/* Card Container */}
      <ul className="container mx-auto w-full p-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-12">
        {friends.map((friend) => {
          return (
            <li key={friend.id} className="self-start">
              <Link
                to={`/${friend.username}`}
                className="block hover:opacity-80"
              >
                <FriendCard
                  friend={friend}
                  confirmFriend={confirmFriend}
                  deleteFriend={deleteFriend}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
