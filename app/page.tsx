"use client";
import { useState } from "react";
import { getFortune, CoderType, coderTypes } from "./utils/coderType";

export default function HomePage() {
  const [messages, setMessages] = useState<string[]>([]);

  function handleClick(coder: CoderType) {
    const fortune = getFortune(coder);
    setMessages(fortune);
  }

  return (
    <main className="p-8 space-y-4">
      <img src="/cookie.svg" width={220} alt="Fortune cookie" />
      <div className="animated-typewriter">
        <h1 className="text-[30px] font-bold animated-banner">My Techie Cookie.</h1>
      </div>
      <h2 className="text-[22px]">What type of coder are you? Click to reveal your fortune:</h2>
      <div className="flex gap-2">
        {coderTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleClick(type)}
            className="px-3 py-1 border rounded bg-gray-200 hover:bg-teal-200 focus:bg-teal-200"
          >
            {type}
          </button>
        ))}
      </div>
      {messages.map((message, idx) => (
        <div className="p-4 shadow-sm bg-white" key={idx}>
          <p className="text-lg">{message}</p>
        </div>
      ))}
    </main>
  );
}
