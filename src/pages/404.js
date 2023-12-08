import React from "react";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <>
      <div className="flex gap-4 text-white text-center text-3xl md:text-5xl flex-col items-center justify-center h-screen">
        <h1>404 - Page Not Found</h1>
        <div className="flex gap-2 items-center">
          <motion.div
            animate={{ x: ["-10%", "10%"] }}
            transition={{ repeat: Infinity, duration: 2 }}>
            <FaArrowRight size={20} />
          </motion.div>
          <Link className="hover:opacity-80" href="/">Go back home</Link>
          <motion.div
            animate={{ x: ["10%", "-10%"] }}
            transition={{ repeat: Infinity, duration: 2 }}>
            <FaArrowLeft size={20} />
          </motion.div>
        </div>
      </div>
    </>
  );
}
