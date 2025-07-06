import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with Next.js and Node.js',
      tags: ['Full-stack', 'Next.js', 'TypeScript'],
      github: '#',
      demo: '#'
    },
    // Add 3-5 more projects
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
                )}
                {project.demo && (
                  <a href={project.demo} className="text-blue-600 hover:underline">Live Demo</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}