"use client";

import { useState } from "react";
// useState
export default function Home() {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  return (
    <main className={"h-screen"}>
      <div className=" gap-4 h-full bg-red-400 flex items-center">
        <div className="mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24">{number1}</h2>

          <button
            className="w-48 h-48 mx-auto bg-blue-500 text-white font-bold text-2xl"
            title="Number 1"
            type="button"
            onClick={() => setNumber1((prev) => prev + 1)}
          >
            1
          </button>
        </div>
        <div className="mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24">{number2}</h2>

          <button
            className="w-48 h-48 mx-auto bg-blue-500 text-white font-bold text-2xl"
            type="button"
            title="Number 2"
            onClick={() => setNumber2((prev) => prev + 1)}
          >
            2
          </button>
        </div>
      </div>
      <h2 className="font-bold absolute bottom-12 left-1/2 transform -translate-x-1/2 text-5xl">
        Result: {number1 + number2}
      </h2>
      <button
        onClick={() => {
          setNumber1(0);
          setNumber2(0);
        }}
        className="font-bold absolute bottom-12 right-12"
      >
        Reset
      </button>
    </main>
  );
}
