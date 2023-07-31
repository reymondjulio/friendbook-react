import { useLoaderData } from "react-router-dom";

import dataFriends from "../data/friends.json";

import { Header } from "../components/header";

import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

import { UserPlusIcon } from "@heroicons/react/24/solid";

export function loader({ params }) {
  const friend = dataFriends.find((friend) => {
    if (friend.username === params.username) {
      return friend;
    }
  });
  return { friend };
}

export default function Username() {
  const { friend } = useLoaderData();

  return (
    <div className="bg-slate-100 h-screen">
      <Header />
      <main className="container mx-auto w-full h-auto">
        <div className="container mx-auto max-w-4xl ">
          <img className="w-full h-96 mb-4 bg-cover bg-center object-cover rounded-md" src={friend.coverURL} alt={friend.name} />
        </div>

        <div className="container max-w-4xl mx-auto flex justify-between bg-white border-2 border-white p-4">
          <img className="w-32 h-32 rounded-full bg-cover" src={friend.avatarURL} alt={friend.name} />

          <div className="mr-auto pl-4 space-y-2">
            <h3 className="text-3xl font-bold text-black">{friend.name}</h3>
            <p className="text-gray-500 font-bold">{friend.mutualFriends} Mutual Friends</p>
          </div>

          <div className="flex gap-x-2 h-8 self-center">
            <button className="flex items-center gap-x-1 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-md">
              <UserPlusIcon className="w-4 h-4 " /> Friend
            </button>
            <button className="flex items-center gap-x-1 rounded-md bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 text-sm">
              <ChatBubbleLeftRightIcon className="w-4 h-4" /> Message
            </button>
          </div>
        </div>

        {/* <h1>{friend.name}</h1>

        <pre>{JSON.stringify(friend, null, 2)}</pre> */}
      </main>
    </div>
  );
}
