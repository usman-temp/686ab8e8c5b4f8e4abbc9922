import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Hi, I'm John Doe — Full-Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Crafting scalable web experiences
        </p>
        <div className="flex gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            href="#projects"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="border-2 border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            href="/resume.pdf"
            download
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}