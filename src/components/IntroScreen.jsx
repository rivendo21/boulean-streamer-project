import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./CodeIntro.css";
import MainContent from "./MainContent"; // your main page component

export default function CodeIntro() {
  const [isTrue, setIsTrue] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    // Change false -> true
    const timer1 = setTimeout(() => setIsTrue(true), 2000);

    // Show main content 1s after true appears
    const timer2 = setTimeout(() => setShowMain(true), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimatePresence>
      {!showMain ? (
        <motion.div
          className="intro-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="pink">
            <span className="white">if</span>(boulean
          </span>{" "}
          =={" "}
          <AnimatePresence>
            {!isTrue ? (
              <motion.span
                key="false"
                className="red"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                false)
              </motion.span>
            ) : (
              <motion.span
                key="true"
                className="green"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                true)
              </motion.span>
            )}
          </AnimatePresence>{" "}
          {"{"}start(){"}"}
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <MainContent />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
