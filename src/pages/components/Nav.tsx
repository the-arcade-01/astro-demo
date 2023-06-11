import taichi from "/taichi.png";
import { useState } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";
import { motion } from "framer-motion";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          stroke="#282828"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </svg>
      <div className="w-[50px]">
        <img src={taichi} alt="taichi" />
      </div>

      <h1 className="text-lg font-bold">
        <a href="/">Taichi</a>
      </h1>

      {matches && (
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      )}

      {!matches && (
        <div
          className="space-y-1 cursor-pointer z-50"
          onClick={() => setToggle((prev) => !prev)}
        >
          <motion.span
            animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggle ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggle ? -45 : 0,
              y: toggle ? -8 : 0,
              width: toggle ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggle && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center"
        >
          <div className="flex flex-col gap-24 text-lg">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
