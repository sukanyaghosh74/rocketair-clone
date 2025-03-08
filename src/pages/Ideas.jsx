import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ideasData = [
  { title: "AI Revolution", description: "Exploring AI advancements." },
  { title: "Space Exploration", description: "The future of interstellar travel." },
];

const Ideas = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-900 text-white p-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center"
        >
          Ideas & Innovations
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {ideasData.map((idea, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold">{idea.title}</h2>
              <p className="mt-2">{idea.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Ideas;
