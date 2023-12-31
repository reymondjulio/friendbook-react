import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full  bg-blue-500 sticky top-0 z-10">
      <div className="container mx-auto max-6-xl w-full bg-blue-500 p-4 flex flex-wrap gap-y-6 justify-center gap-x-12 sm:justify-between items-center ">
        <h1 className="text-left text-2xl font-bold text-white ">
          <Link to="/"> Friendbook</Link>
        </h1>

        <ul className="flex gap-x-4 lg:gap-x-16 self-center">
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

        <div className="flex justify-center">
          <input type="text" className=" px-8 py-1 rounded-lg text-sm bg-gray-200 focus:outline-none w-3/4 sm:w-full" placeholder="Search Friends..." />
        </div>
      </div>
    </header>
  );
}
