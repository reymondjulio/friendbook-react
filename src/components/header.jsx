import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-blue-500 sticky top-0 z-10">
      <div className="container mx-auto bg-blue-500 p-4 flex justify-between items-center ">
        <h1 className="text-left text-2xl font-bold text-white">
          <Link to="/"> Friendbook</Link>
        </h1>

        <ul className="flex gap-x-4">
          <li>
            <Link to="/register" className="text-white font-semibold">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white font-semibold">
              Login
            </Link>
          </li>
        </ul>

        <div>
          <input type="text" className="px-8 py-1 rounded-lg bg-gray-200 focus:outline-none" placeholder="Search Friends..." />
        </div>
      </div>
    </header>
  );
}
