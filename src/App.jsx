import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500">
      <h1 className="font-sans text-center text-3xl font-bold text-slate-200 drop-shadow-md py-4">Friend's Book</h1>
      {/* Container Card */}
      <div className="container mx-auto w-full p-8 flex flex-wrap justify-center gap-6">
        {/* Reymond Julio */}
        <div className="max-w-fit h-fit mt-6 rounded shadow-lg shadow-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="">
            <img className="w-60 h-60 rounded  overflow-hidden" src="/reymond.jpg" alt="reymond" />
          </div>
          <div className="flex flex-col justify-center items-center p-6  space-y-2 bg-slate-200">
            <h3 className="text-center text-xl font-semibold">Reymond Julio</h3>
            <p className="text-center text-lg text-slate-800">26 years old</p>
            <p className="text-center text-lg text-slate-500">5 mutual friends</p>
            <button className="bg-green-900 text-white p-2 rounded w-full self-center hover:bg-green-800">Request Accepted</button>
          </div>
        </div>

        {/* M Haidar Hanif */}
        <div className="max-w-fit h-fit mt-6 rounded shadow-lg shadow-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div>
            <img className="w-60 h-60 rounded overflow-hidden" src="/haidar.jpg" alt="haidar" />
          </div>
          <div className="flex flex-col justify-center items-center p-6  space-y-2 bg-slate-200">
            <h3 className="text-center text-xl font-semibold">M Haidar Hanif</h3>
            <p className="text-center text-lg text-slate-800">30 years old</p>
            <p className="text-center text-lg text-slate-500">10 mutual friends</p>
            <button className="bg-blue-500 text-white p-2 rounded w-full self-center hover:bg-blue-400">Confirm</button>
            <button className="bg-slate-300 rounded text-black font-semibold p-2 w-full self-center hover:bg-slate-400">Delete</button>
          </div>
        </div>

        {/* Christopher Kevin */}
        <div className="max-w-fit h-fit mt-6 rounded shadow-lg shadow-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <div>
            <img className="w-60 h-60 rounded overflow-hidden" src="/christopher.jpg" alt="christopher" />
          </div>
          <div className="flex flex-col justify-center items-center p-6  space-y-2 bg-slate-200">
            <h3 className="text-center text-xl font-semibold">Christopher Kevin</h3>
            <p className="text-center text-lg text-slate-800">28 years old</p>
            <p className="text-center text-lg text-slate-500">3 mutual friends</p>
            <button className="bg-green-900 text-white p-2 rounded w-full self-center hover:bg-green-800">Request Accepted</button>
          </div>
        </div>

        {/* Caroline */}
        <div className="max-w-fit h-fit mt-6 rounded shadow-lg shadow-blue-300  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div>
            <img className="w-60 h-60 rounded overflow-hidden" src="/caroline.jpg" alt="caroline" />
          </div>
          <div className="flex flex-col justify-center items-center p-6  space-y-2 bg-slate-200">
            <h3 className="text-center text-xl font-semibold">Caroline Elizabeth </h3>
            <p className="text-center text-lg text-slate-800">24 years old</p>
            <p className="text-center text-lg text-slate-500">8 mutual friends</p>
            <button className="bg-green-900 text-white p-2 rounded w-full self-center hover:bg-green-800">Request Accepted</button>
          </div>
        </div>

        {/* Victoria */}
        <div className="max-w-fit h-fit mt-6 rounded shadow-lg shadow-blue-300  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div>
            <img className="w-60 h-60 rounded overflow-hidden" src="/victoria.jpg" alt="vicky" />
          </div>
          <div className="flex flex-col justify-center items-center p-6  space-y-2 bg-slate-200">
            <h3 className="text-center text-xl font-semibold">Victoria Grace</h3>
            <p className="text-center text-lg text-slate-800">29 years old</p>
            <p className="text-center text-lg text-slate-500">2 mutual friends</p>
            <button className="bg-blue-500 text-white p-2 rounded w-full self-center hover:bg-blue-400">Confirm</button>
            <button className="bg-slate-300 rounded text-black font-semibold p-2 w-full self-center hover:bg-slate-400">Delete</button>
          </div>
        </div>

        {/* Daniel */}
        <div className="max-w-fit h-fit mt-6 rounded shadow-lg shadow-blue-300  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <div>
            <img className="w-60 h-60 rounded overflow-hidden" src="/daniel.jpg" alt="daniel" />
          </div>
          <div className="flex flex-col justify-center items-center p-6  space-y-2 bg-slate-200">
            <h3 className="text-center text-xl font-semibold">Daniel William</h3>
            <p className="text-center text-lg text-slate-800">27 years old</p>
            <p className="text-center text-lg text-slate-500">7 mutual friends</p>
            <button className="bg-green-900 text-white p-2 rounded w-full self-center hover:bg-green-800">Request Accepted</button>
          </div>
        </div>

        {/* Jessica */}
        <div className="max-w-fit h-fit mt-6 rounded shadow-lg shadow-blue-300  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <div>
            <img className="w-60 h-60 rounded overflow-hidden" src="/jessica.jpg" alt="jessica" />
          </div>
          <div className="flex flex-col justify-center items-center p-6  space-y-2 bg-slate-200">
            <h3 className="text-center text-xl font-semibold">Jessica Lynn</h3>
            <p className="text-center text-lg text-slate-800">26 years old</p>
            <p className="text-center text-lg text-slate-500">12 mutual friends</p>
            <button className="bg-blue-500 text-white p-2 rounded w-full self-center hover:bg-blue-400">Confirm</button>
            <button className="bg-slate-300 rounded text-black font-semibold p-2 w-full self-center hover:bg-slate-400">Delete</button>
          </div>
        </div>

        {/* Kelly */}
        <div className="max-w-fit h-fit mt-6 rounded shadow-lg shadow-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div>
            <img className="w-60 h-60 rounded overflow-hidden" src="/kelly.jpg" alt="kelly" />
          </div>
          <div className="flex flex-col justify-center items-center p-6  space-y-2 bg-slate-200">
            <h3 className="text-center text-xl font-semibold">Kelly Marie</h3>
            <p className="text-center text-lg text-slate-800">23 years old</p>
            <p className="text-center text-lg text-slate-500">10 mutual friends</p>
            <button className="bg-blue-500 text-white p-2 rounded w-full self-center hover:bg-blue-400">Confirm</button>
            <button className="bg-slate-300 rounded text-black font-semibold p-2 w-full self-center hover:bg-slate-400">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
