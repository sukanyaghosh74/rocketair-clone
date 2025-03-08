import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white text-center"
      >
        <h1 className="text-5xl font-bold">Welcome to RocketAir Clone</h1>
        <p className="mt-4 text-lg">Experience creativity and innovation.</p>
        <Link to="/ideas" className="mt-6 bg-white text-black px-4 py-2 rounded">
          View Ideas
        </Link>
      </motion.section>
      <Footer />
    </>
  );
};

export default Home;
