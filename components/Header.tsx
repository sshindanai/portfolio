import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  const socials: string[] = [
    "https://www.facebook.com/shindanai.sh/",
    "https://www.instagram.com/sshindanai",
    "https://www.linkedin.com/in/shindanai-mongkolsin-596422164",
    "https://github.com/sshindanai",
  ];
  const styleConfig = {
    fgColor: "gray",
    bgColor: "transparent",
  };
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            url={social}
            fgColor={styleConfig.fgColor}
            bgColor={styleConfig.bgColor}
          ></SocialIcon>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor={styleConfig.fgColor}
          bgColor={styleConfig.bgColor}
        ></SocialIcon>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </header>
  );
}
