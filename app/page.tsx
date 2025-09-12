"use client";
import { useState, useReducer } from "react";
import fortunes from "@/data/fortune.json";
import { Fortune } from "@/lib/types";
import FortuneCard from "@/components/fortuneCard";

const coderTypes = ["grasshopper", "debugLogger", "futureBuilder", "epicEngineer"] as const;

export default function HomePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredFortunes = selectedType === "all"
    ? fortunes
    : fortunes.filter((fortune) => fortune.type === selectedType);

  return (
    <main className="p-8 space-y-4">
      <img src="/cookie.svg" width={220} />
      <div className="animated-typewriter"><h1 className="text-[30px] font-bold animated-banner">My Techie Cookie.</h1></div>
      {!selectedType && <h2 className="text-[22px]">What type of coder are you? Click to reveal your fortune:</h2>}
      <div className="flex gap-2">
        {coderTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className="px-3 py-1 border rounded bg-gray-200 hover:bg-teal-200 focus:bg-teal-200"
          >
            {type}
          </button>
        ))}
        <button
          onClick={() => setSelectedType("all")}
          className="px-3 py-1 border rounded bg-gray-200 hover:bg-teal-200 focus:bg-teal-200"
        >All
        </button>
      </div>
      {filteredFortunes.map((fortune) => (
        <FortuneCard key={fortune.id} fortune={fortune} />
      ))}
    </main>
  );
}
