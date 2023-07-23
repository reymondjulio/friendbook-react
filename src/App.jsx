import { friends } from "./data/friends";

function App() {
  return (
    <main className="bg-slate-100">
      <header>
        <h1 className="text-center text-3xl font-bold py-4">Friendbook</h1>
      </header>

      {/* <pre>{JSON.stringify(friends, null, 2)}</pre> */}

      {/* Card Container */}
      <ul className="container mx-auto w-full p-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-12">
        {friends.map((friend) => {
          return (
            <li
              key={friend.id}
              className="max-w-fit h-fit justify-self-center self-start rounded bg-white transition ease-in-out delay-150"
            >
              <img
                className="w-60 h-60 rounded object-cover  overflow-hidden"
                src={friend.avatarURL}
                alt={friend.name}
              />

              <div className="flex flex-col justify-center items-center p-6 space-y-2">
                <h3 className="text-center text-xl font-semibold">
                  {friend.name}
                </h3>
                <p className="text-center text-lg text-slate-800">
                  {friend.age} years old
                </p>
                <p className="text-center text-lg text-slate-500">
                  {friend.mutualFriends} mutual friends
                </p>
              </div>

              {!friend.isConfirmed && (
                <div className="p-2 space-y-2">
                  <button className="bg-blue-500 text-white p-2 rounded w-full self-center hover:bg-blue-400">
                    Confirm
                  </button>
                  <button className="bg-slate-300 rounded text-black font-semibold p-2 w-full self-center hover:bg-slate-400">
                    Delete
                  </button>
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
