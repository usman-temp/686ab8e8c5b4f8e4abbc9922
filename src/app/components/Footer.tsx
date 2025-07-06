export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '/github.svg' },
    { name: 'LinkedIn', url: '#', icon: '/linkedin.svg' },
    { name: 'Twitter', url: '#', icon: '/twitter.svg' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.icon} alt={link.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-white transition-colors">
              Light
            </button>
            <span>|</span>
            <button className="hover:text-white transition-colors">
              Dark
            </button>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}