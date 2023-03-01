import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { ExperienceCardProps } from "../types/ExperienceCard";
import siriusIcon from "../public/sirius-icon.jpeg";
import { StaticImageData } from "next/image";

type Props = {};

export default function WorkExperience({}: Props) {
  const experiences: ExperienceCardProps[] = [
    {
      image: siriusIcon,
      company: "Hato Hub",
      startDate: "2023-03",
      position: "Software Engineer",
      techstacks: [
        "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
        "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
        "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      ],
      summaries: [
        "Design, develop, and maintain backend services for food delivery platform",
        "Works with Serverless AWS",
      ],
    },
    {
      image: siriusIcon,
      company: "Sirius Technologies",
      startDate: "2022-06",
      endDate: "2023-02",
      position: "Backend Developer",
      techstacks: [
        "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
        "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
        "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      ],
      summaries: [
        "Develop microservices for credit card client",
        "Mentor junior developers",
      ],
    },
    {
      image: siriusIcon,
      company: "Midassoft",
      startDate: "2021-03",
      endDate: "2022-06",
      position: "Software Developer",
      techstacks: [
        "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
        "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
        "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      ],
      summaries: [
        "Develop microservices for credit card client",
        "Mentor junior developers",
      ],
    },
    {
      image: siriusIcon,
      company: "Kobkiat-IT",
      startDate: "2019-12",
      endDate: "2021-11",
      position: "Software Developer",
      techstacks: [
        "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
        "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
        "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      ],
      summaries: [
        "Develop microservices for credit card client",
        "Mentor junior developers",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="flex w-full p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory">
        {experiences.map((experience) => (
          <ExperienceCard {...experience} />
        ))}
      </div>
    </motion.div>
  );
}
