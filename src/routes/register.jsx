import { Header } from "../layouts/header";
import { Link } from "react-router-dom";
import { Footer } from "../layouts/footer";

export default function Register() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center items-center bg-gray-50 py-12 px-12">
        <div className="max-w-md w-full h-full space-y-8 border-2 rounded-lg ring-3 border-blue-200 p-4">
          <div>
            <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-blue-500">
              Register an Account
            </h2>
          </div>
          <form className="mt-8 space-y-6 p-4">
            <div className="rounded-md shadow-sm space-y-6">
              <div className="space-y-1">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email-address">Email:</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="birthday">Birth date:</label>
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Birthday"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
            <div className="self-center">
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-400 py-2 rounded text-white text-sm font-bold w-full self-center"
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
