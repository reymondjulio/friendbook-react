import { useState } from "react";

import { Header } from "./components/header";

import { FriendCard } from "./components/friend-card";

import dataFriends from "./data/friends.json";

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
      {/* <pre>{JSON.stringify(friends, null, 2)}</pre> */}
      <Header />

      {/* Card Container */}
      <ul className="container mx-auto w-full py-8 px-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-x-2 lg:gap-x-0 gap-y-4">
        {friends.map((friend) => {
          return (
            <li key={friend.id} className="self-start justify-self-center">
              <FriendCard friend={friend} confirmFriend={confirmFriend} deleteFriend={deleteFriend} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
