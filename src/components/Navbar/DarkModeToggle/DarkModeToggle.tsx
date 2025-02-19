import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg"
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: darkMode ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {darkMode ? "☀️" : "🌙"}
    </motion.button>
  );
};

export default DarkModeToggle;
