import { Header } from "../components/header";

export default function Login() {
  return (
    <div className="bg-slate-100">
      <Header />

      <div className="container mx-auto w-full p-8 gap-x-6 max-w-6xl flex justify-between items-center h-screen">
        <div className="max-w-lg w-full space-y-4 mb-44">
          <h1 className="text-6xl text-blue-500 font-bold">Friendbook</h1>
          <p className="text-3xl font-semibold">Connect with friends and the world around you on Friendbook.</p>
        </div>

        <div className="max-w-sm w-full mb-40 ring-0">
          <form className="flex flex-col gap-y-4 bg-white  p-6" action="">
            <input className="border-2 p-2 focus:outline-blue-500" type="text" placeholder="Email or Phone Number" />
            <input className="border-2 p-2 focus:outline-blue-500" type="text" placeholder="Password" />
            <button className="bg-blue-400 hover:bg-blue-300 text-white py-2 rounded font-bold" type="submit">
              Log in
            </button>
            <p className="text-center text-blue-500">Forgot password?</p>
            <button className="bg-green-500 hover:bg-green-400 py-2 rounded text-white text-sm font-bold w-1/2 self-center" type="submit">
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
