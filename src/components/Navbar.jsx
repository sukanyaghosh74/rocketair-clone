import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white p-4 fixed w-full top-0 z-10"
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold">RocketAir Clone</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
        <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"}`}>
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/ideas" className="hover:text-gray-300">Ideas</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
