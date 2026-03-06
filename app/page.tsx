"use client";
import { useState } from "react";
import { CoderType, Fortune } from "@/types/fortune";

const coders = ["grasshopper", "debugLogger", "futureBuilder", "epicEngineer", "fullstackMaster"] as const;

export default function HomePage() {
  const [fortune, setFortune] = useState<Fortune | null>(null);
  const [slips, setSlips] = useState<string[]>([]);
  const [isFullStackMaster, setIsFullStackMaster] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false); // For spark animation
  const [isWaiting, setIsWaiting] = useState<boolean>(false); // To track waiting state

  async function handleClick(coder: CoderType) {
    try {
      setIsWaiting(true); // Waiting for the response
      setIsActive(true); // Start the spark animation while waiting
      const res = await fetch(`/api/fortune?coderType=${coder}`);
      const data: Fortune = await res.json();

      // If the coder is fullstackMaster, we expect an array of static and locally fetched messages (slips)
      if (coder === "fullstackMaster") {
        setSlips(data.message);
        setIsFullStackMaster(true);
        setIsActive(false); // Stop the spark animation after receiving the response
      } else {
        setFortune(data);
        setIsFullStackMaster(false);
        setIsActive(false); // Stop the spark animation after receiving the response
      }
    } catch (error) {
      console.error("Error fetching fortune:", error);
    } finally {
      setIsWaiting(false); // Stop waiting for the response
    }
  }

  return (
    <main className="grid grid-col-1">
      <header className="p-5 md:p-8">
        <img className="logo" src="/cookie.svg" width={220} alt="Fortune cookie" />
        <div className="animated-typewriter pt-2 md:pt-4 lg:pt-0">
          <h1 className="text-[30px] font-bold animated-banner">My Techie Cookie.</h1>
        </div>
      </header>
      <section className="pl-5 pr-5">
        <h2 className="text-[22px] lg:dark:font-semibold dark:text-white">
          What type of coder are you? Click to reveal your fortune:
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 text-xl lg:text-base mt-3">
          {coders.map((coder) => (
            <button
              key={coder}
              onClick={() => handleClick(coder)}
              className="px-3 py-3 lg:py-[7px] mb-3 lg:mb-0 border rounded bg-gray-200 lg:bg-amber-200 dark:bg-blue-900 lg:dark:bg-rose-950 hover:bg-amber-200 dark:hover:bg-gray-500 lg:hover:bg-teal-200 lg:dark:hover:bg-blue-900 focus:bg-amber-200 dark:focus:bg-gray-500 lg:focus:bg-teal-200"
            >
              {coder}
            </button>
          ))}
        </div>
        <div className="cookie-jar mt-2 lg:mt-10 pb-10">
          {isWaiting && (<h3 className={`text-[16px] md:text-xl spark ${isActive ? "active" : ""}`}>Waiting for your fortune...</h3>)}
          {isFullStackMaster === true ? (
            <div>
              {
                slips.map((slip: string, index: number) => (
                  <div key={index} className="cookie-slip p-3 pb-2 bg-white dark:bg-black mt-6">
                    <div>
                      <p className="text-lg leading-[1px]">{slip}</p>
                    </div>
                    <div>
                      <small className="text-sm text-gray-500 dark:text-gray-300">(fullstackMaster)</small>
                    </div>
                  </div>
                ))
              }
            </div>
          ) : (
            !isWaiting && fortune && (
              <div className="cookie-slip p-3 pb-2 bg-white dark:bg-black mt-6">
                <div>
                  <p className="text-lg leading-[1px]">{fortune?.message}</p>
                </div>
                <div>
                  <small className="text-sm text-gray-500 dark:text-gray-300">({fortune?.type})
                  </small>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main >
  );
}
