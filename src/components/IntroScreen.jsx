import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./CodeIntro.css";
import MainContent from "./MainContent";

export default function CodeIntro() {
  const [isTrue, setIsTrue] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsTrue(true), 2000);
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
          key="intro"
          className="intro-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Code text */}
          <div className="code-text">
            <span className="pink">
              <span className="white">if</span>(boulean
            </span>{" "}
            =={" "}
            <motion.span
              key={isTrue ? "true" : "false"}
              className={isTrue ? "green" : "red"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {isTrue ? "true" : "false"})
            </motion.span>{" "}
            {"{"}start(){"}"}
          </div>

          {/* Loader directly under the text */}
          <div className="loader">
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="text">
              <span>Loading</span>
            </div>
            <div className="line"></div>
          </div>
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
