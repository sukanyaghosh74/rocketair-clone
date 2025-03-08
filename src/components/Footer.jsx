import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black text-white p-6 text-center"
    >
      <p>© 2025 RocketAir Clone. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
