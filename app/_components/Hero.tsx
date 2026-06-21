import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      <Image
        src="/hero.gif"
        alt="Hero"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute w-full flex flex-col items-center mt-24">
        <h2
          className="font-bold text-7xl font-game"
          style={{
            textShadow:
              "4px 4px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000",
          }}
        >
          Start Your
        </h2>
        <h2
          className="font-bold text-8xl font-game text-yellow-400"
          style={{
            textShadow:
              "4px 4px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000",
          }}
        >
          Coding Adventure
        </h2>
        <h2 className="mt-5 text-2xl font-game">
          Beginner Friendly Coding Courses and Projects
        </h2>
        <Button className="font-game text-3xl p-6 mt-7" variant="pixel">GET STARTED</Button>
      </div>
    </div>
  );
}

export default Hero;
