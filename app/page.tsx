"use client";
import { useState } from "react";
import { CoderType, Fortune } from "@/types/fortune";

const coders = ["grasshopper", "debugLogger", "futureBuilder", "epicEngineer", "all"] as const;

export default function HomePage() {
  const [fortune, setFortune] = useState<Fortune | any>([]);
  const [slips, setSlips] = useState<string[]>([]);

  async function handleClick(coder: CoderType) {
    const res = await fetch(`/api/fortune?coderType=${coder}`);
    const data: Fortune = await res.json();
    setFortune(data); // ✅ sets one Fortune object
    setSlips(data.message);
    console.log("Fortune received:", data);
  }

  return (
    <main className="p-8 space-y-4">
      <img src="/cookie.svg" width={220} alt="Fortune cookie" />
      <div className="animated-typewriter">
        <h1 className="text-[30px] font-bold animated-banner">My Techie Cookie.</h1>
      </div>
      <h2 className="text-[22px]">
        What type of coder are you? Click to reveal your fortune:
      </h2>
      <div className="flex gap-2">
        {coders.map((coder) => (
          <button
            key={coder}
            onClick={() => handleClick(coder)}
            className="px-3 py-1 border rounded bg-gray-200 hover:bg-teal-200 focus:bg-teal-200"
          >
            {coder}
          </button>
        ))}
      </div>
      {fortune && slips.map((slip: string, idx: number) => (
        <div key={`${fortune.type}-${idx}`} className="p-4 shadow-sm bg-white mt-4">
          <p className="text-lg">{slip}</p>
          <small className="text-gray-500">({fortune.type})</small>
        </div>
      ))
      }
    </main>
  );
}
