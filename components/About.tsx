import React from "react";
import { motion } from "framer-motion";
import shinImg from "../public/shin-img.jpeg";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden sm:block"> */}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          className="rounded-full md:rounded-lg"
          src={shinImg}
          alt="shin"
        ></Image>
      </motion.div>

      <div className="px-0 space-y-3 md:space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          about <span className="underline decoration-[#F7AB0A]/50">me</span>{" "}
        </h4>
        <p className="text-base">
          I'm Shin. I'm a software engineer based in the vibrant city of
          Bangkok, Thailand. With years of experience under my belt, I
          specialize in developing innovative solutions that meet the needs of
          businesses and individuals alike. I'm passionate about pushing
          boundaries and exploring new technologies. I thrive on challenging
          projects and pride myself on delivering high-quality work that exceeds
          expectations. When I'm not coding, you can find me playing chess,
          belting out my favorite tunes at karaoke, or hanging out with friends.
          I believe that maintaining a balanced life is essential to being a
          successful and fulfilled professional.
        </p>
      </div>
    </motion.div>
  );
}
