import React from "react";
import siriusIcon from "../public/sirius-icon.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExperienceCardProps } from "../types/ExperienceCard";

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-lg space-y-12 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="h-28 w-28 xl:w-[150px] xl:h-[150px] object-cover object-center"
      >
        <Image
          src={props.image}
          alt={props.company}
          className="object-cover object-center rounded-full mt-[9rem]"
        ></Image>
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{props.position}</h4>
        <p className="mt-1 text-2xl font-bold">{props.company}</p>
        <div className="flex my-2 space-x-2">
          {props.techstacks.map((tech) => (
            <Image
              src={tech}
              alt=""
              width={10}
              height={10}
              className="w-10 h-10 rounded-full"
            />
          ))}
        </div>
        <p className="py-5 text-gray-300 uppercase">
          {`${props.startDate} - ${props.endDate ? props.endDate : "Present"}`}
        </p>

        <ul className="ml-5 space-y-4 text-lg list-disc">
          {props.summaries.map((summary) => (
            <li>{summary}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
