function App() {
  return (
    <main className="bg-slate-100">
      <header>
        <h1 className="text-center text-3xl font-bold py-4">Friendbook</h1>
      </header>

      {/* Card Container */}
      <ul className="container mx-auto w-full p-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-12">
        {/* Friend */}
        <li className="max-w-fit h-fit justify-self-center self-start rounded bg-white transition ease-in-out delay-150">
          <img
            className="w-60 h-60 rounded object-cover  overflow-hidden"
            src="/avatars/reymond.jpg"
            alt="reymond"
          />

          <div className="flex flex-col justify-center items-center p-6 space-y-2">
            <h3 className="text-center text-xl font-semibold">Reymond Julio</h3>
            <p className="text-center text-lg text-slate-800">26 years old</p>
            <p className="text-center text-lg text-slate-500">
              5 mutual friends
            </p>
          </div>

          <div className="p-2 space-y-2">
            <button className="bg-blue-500 text-white p-2 rounded w-full self-center hover:bg-blue-400">
              Confirm
            </button>
            <button className="bg-slate-300 rounded text-black font-semibold p-2 w-full self-center hover:bg-slate-400">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default App;
