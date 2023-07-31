import { Header } from "../components/header";

export default function Login() {
  return (
    <div className="bg-slate-100">
      <Header />

      <div className="container mx-auto w-full max-w-6xl flex justify-between items-center h-screen">
        <div className="max-w-lg w-full space-y-4 mb-44">
          <h1 className="text-6xl text-blue-500 font-bold">Friendbook</h1>
          <p className="text-3xl font-semibold">Connect with friends and the world around you on Friendbook.</p>
        </div>

        <div>
          <form action="">
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}
