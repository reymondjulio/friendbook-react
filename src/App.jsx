import { useState } from "react";

import { Button } from "./components/button";
import { dataFriends } from "./data/friends";

function App() {
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
        <h1 className="text-center text-3xl font-bold py-4 text-blue-500 shadow-md">Friendbook</h1>
      </header>

      {/* <pre>{JSON.stringify(friends, null, 2)}</pre> */}

      {/* Card Container */}
      <ul className="container mx-auto w-full p-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-12">
        {friends.map((friend) => {
          return (
            <li key={friend.id} className="max-w-fit h-fit justify-self-center self-start rounded bg-white transition ease-in-out delay-150">
              <img className="w-60 h-60 rounded object-cover  overflow-hidden" src={friend.avatarURL} alt={friend.name} />

              <div className="flex flex-col justify-center items-center p-6 space-y-2">
                <h3 className="text-center text-xl font-semibold">{friend.name}</h3>
                <p className="text-center text-lg text-slate-800">{friend.age} years old</p>
                <p className="text-center text-lg text-slate-500">{friend.mutualFriends} mutual friends</p>
              </div>

              {!friend.isConfirmed && (
                <div className="p-2 space-y-2">
                  <Button variant="primary" onClick={() => confirmFriend(friend.id)}>
                    Confirm
                  </Button>
                  <Button variant="secondary" onClick={() => deleteFriend(friend.id)}>
                    Delete
                  </Button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
