"use client";
import { useState } from "react";
import { CoderType, Fortune } from "@/types/fortune";

const coders = ["grasshopper", "debugLogger", "futureBuilder", "epicEngineer", "fullstackMaster"] as const;

export default function HomePage() {
  const [fortune, setFortune] = useState<Fortune | null>(null);
  const [slips, setSlips] = useState<string[]>([]);
  const [isCoderAll, setIsCoderAll] = useState<boolean>(false);
  const [active, setActive] = useState(false);

  async function handleClick(coder: CoderType) {
    const res = await fetch(`/api/fortune?coderType=${coder}`);
    const data: Fortune = await res.json();

    if (coder === "fullstackMaster") {
      setSlips(data.message);
      setIsCoderAll(true);
    } else {
      setFortune(data);
      setIsCoderAll(false);
    }

    setActive(true);
    setTimeout(() => setActive(false), 2500);
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
      <div className="cookie-jar">
        {isCoderAll === true ? (
          <div>
            {
              slips.map((slip: string, index: number) => (
                <div key={index} className="cookie-slip p-3 pb-2 bg-white mt-4">
                  <div>
                    <p className="text-lg leading-[1px]">{slip}</p>
                  </div>
                  <div>
                    <small className="text-sm text-gray-500">(fullstackMaster)</small>
                    <span className={`spark ${active ? "active" : ""}`}></span>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          fortune && (
            <div className="cookie-slip p-3 pb-2 bg-white mt-4">
              <div>
                <p className="text-lg leading-[1px]">{fortune?.message}</p>
              </div>
              <div>
                <small className="text-sm text-gray-500">({fortune?.type})
                </small>
                <span className={`spark ${active ? "active" : ""}`}></span>
              </div>
            </div>
          )
        )}
      </div>
    </main >
  );
}
