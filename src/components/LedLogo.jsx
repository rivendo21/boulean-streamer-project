import { motion } from "framer-motion";

export default function LedLogo() {
  return (
    <motion.img
      src="https://boulean.net/assets/images/boulean_logo_428x112.png"
      alt="Boulean Logo"
      style={{ width: 200 }}
      animate={{
        filter: [
          "brightness(0.3) drop-shadow(0 0 0 #00ff00)",
          "brightness(1) drop-shadow(0 0 10px #00ff00)",
        ],
      }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    />
  );
}
