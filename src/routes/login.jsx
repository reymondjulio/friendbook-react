import { Header } from "../components/header";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-slate-100">
      <Header />

      <div className="container mx-auto w-full max-w-6xl p-8 gap-x-6 gap-y-12 flex flex-wrap justify-center lg:justify-between lg:items-center min-h-screen">
        <div className="max-w-lg w-full space-y-4 text-center lg:text-left self-center lg:mb-44">
          <h1 className="text-4xl lg:text-6xl text-blue-500 font-bold">Friendbook</h1>
          <p className="text-2xl lg:text-3xl font-semibold">Connect with friends and the world around you on Friendbook.</p>
        </div>

        <div className="max-w-sm w-full mb-40 ring-0">
          <form className="flex flex-col gap-y-4 bg-white  p-6" action="">
            <div className="w-full">
              <label htmlFor="email"></label>
              <input className="border-2 p-2 focus:outline-blue-500 w-full" id="email" name="email" type="text" autoComplete="email" required placeholder="Email or Phone Number" />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input className="border-2 p-2 focus:outline-blue-500 w-full" id="password" name="password" type="password" autoComplete="current-password" required placeholder="Password" />
            </div>

            <button className="bg-blue-400 hover:bg-blue-300 text-white py-2 rounded font-bold" type="submit">
              Log in
            </button>
            <p className="text-center text-blue-500">Forgot password?</p>

            <Link to="/register" className="block text-center">
              <button className="bg-green-500 hover:bg-green-400 py-2 rounded text-white text-sm font-bold w-1/2 self-center" type="submit">
                Create New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
