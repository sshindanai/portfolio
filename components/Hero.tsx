import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import shinImg from "../public/shin-img.jpeg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I am Shin", "Nice to meet you"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircle />
      <Image
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        src={shinImg}
        alt="shin"
        width={500}
        height={500}
      ></Image>
      <div className="z-20">
        <h2 className="pb-2 text-sm tracking-[15px] text-gray-500 uppercase">
          Software Engineer
        </h2>
        <h1 className="px-10 text-4xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A"></Cursor>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
