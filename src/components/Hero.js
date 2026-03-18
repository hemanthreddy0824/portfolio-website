import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        initial={{ opacity:0, y:-50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >
        Hemanth Kumar Reddy Kamjula
      </motion.h1>

      <p>DevOps Engineer | Cloud Engineer | Blockchain Developer </p>

      <div className="buttons">
        <a href="#projects">View Projects</a>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
};

export default Hero;