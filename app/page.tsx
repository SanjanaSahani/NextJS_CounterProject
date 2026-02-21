"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const MIN = -10;
  const MAX = 100;

  const isMin = count <= MIN;
  const isMax = count >= MAX;

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
      
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 text-center w-87.5">
        
        <h1 className="text-3xl font-bold text-white mb-6">
          Counter Project
        </h1>

        <div className="text-6xl font-extrabold text-green-400 mb-4 transition-all duration-300">
          {count}
        </div>

        {/* Message */}
        {isMin && (
          <p className="text-red-400 text-sm mb-4">
            🚫 Minimum limit reached (-10)
          </p>
        )}

        {isMax && (
          <p className="text-yellow-400 text-sm mb-4">
            🚀 Maximum limit reached (100)
          </p>
        )}

        <div className="flex justify-center gap-4 mt-4">
          
          {/* Minus Button */}
          <button
            onClick={() => setCount(count - 1)}
            disabled={isMin}
            className={`px-5 py-2 rounded-xl font-semibold transition duration-200 active:scale-95
              ${isMin 
                ? "bg-gray-500 cursor-not-allowed text-gray-300" 
                : "bg-red-500 hover:bg-red-600 text-white"
              }`}
          >
            −
          </button>

          {/* Reset Button */}
          <button
            onClick={() => setCount(0)}
            className="px-5 py-2 rounded-xl bg-orange-400 hover:bg-orange-500 text-white font-semibold transition duration-200 active:scale-95"
          >
            Reset
          </button>

          {/* Plus Button */}
          <button
            onClick={() => setCount(count + 1)}
            disabled={isMax}
            className={`px-5 py-2 rounded-xl font-semibold transition duration-200 active:scale-95
              ${isMax 
                ? "bg-gray-500 cursor-not-allowed text-gray-300" 
                : "bg-indigo-500 hover:bg-indigo-600 text-white"
              }`}
          >
            +
          </button>

        </div>

      </div>
    </main>
  );
}
