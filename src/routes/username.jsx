import { useLoaderData } from "react-router-dom";

import dataFriends from "../data/friends.json";

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
    <div>
      <h1>{friend.name}</h1>

      <pre>{JSON.stringify(friend, null, 2)}</pre>
    </div>
  );
}
