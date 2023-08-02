import { Header } from "../components/header";

export default function Register() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center  bg-gray-50 py-12 px-12">
        <div className="max-w-md w-full h-full space-y-8 border-2 rounded-lg ring-3 border-blue-100  p-4">
          <div>
            <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-blue-500">Register an Account</h2>
          </div>
          <form className="mt-8 space-y-6 p-4">
            <div className="rounded-md shadow-sm space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
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
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
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

              <div>
                <label htmlFor="birthday" className="sr-only">
                  Birthday
                </label>
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Birthday"
                />
              </div>

              <div>
                <label htmlFor="gender" className="sr-only">
                  Gender
                </label>
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
          </form>
        </div>
      </div>
      ;
    </div>
  );
}
