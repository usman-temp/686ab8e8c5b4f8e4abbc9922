export default function About() {
  const skills = [
    'Next.js', 'TypeScript', 'Node.js', 'GraphQL',
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose dark:prose-invert">
            <p className="text-lg mb-4">
              Full-stack developer with 5+ years of experience building scalable web applications.
              Specialized in modern JavaScript frameworks and cloud-native architectures.
            </p>
            <p className="text-lg">
              Passionate about creating efficient, maintainable solutions that solve real-world problems.
              Continuous learner with a focus on performance optimization and clean code practices.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}