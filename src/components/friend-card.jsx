import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Button } from "./button";

export function FriendCard({ friend, confirmFriend, deleteFriend }) {
  return (
    <div className="max-w-fit h-fit rounded bg-white transition ease-in-out delay-150">
      <Link to={`/${friend.username}`} className="block hover:opacity-80">
        <img className="w-60 h-60 rounded object-cover  overflow-hidden" src={friend.avatarURL} alt={friend.name} />
      </Link>

      <div className="flex flex-col justify-center items-center p-2 space-y-2">
        <h3 className="text-center text-md sm:text-xl font-semibold">{friend.name}</h3>
        <p className="text-center text-md sm:text-lg text-slate-800">{friend.age} years old</p>
        <p className="text-center text-md sm:text-lg text-slate-500">{friend.mutualFriends.length} mutual friends</p>
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
    </div>
  );
}

FriendCard.propTypes = {
  friend: {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    mutualFriends: PropTypes.array.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
  },
  confirmFriend: PropTypes.func,
  deleteFriend: PropTypes.func,
};
