export function Header() {
  return (
    <header className="bg-blue-500">
      <div className="container mx-auto bg-blue-500 p-4 flex justify-between">
        <h1 className="text-left text-2xl font-bold text-white">Friendbook</h1>
        <div>
          <input type="text" className="px-8 py-1 rounded-lg bg-gray-200 focus:outline-none" placeholder="Search Friends..." />
        </div>
      </div>
    </header>
  );
}
