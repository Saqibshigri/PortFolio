 import PropTypes from 'prop-types';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com",
    live: "https://example.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, image, github, live }) => (
  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <Github className="mr-1" size={18} /> GitHub
        </a>
        <a 
          href={live} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
        >
          <ExternalLink className="mr-1" size={18} /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired
};

export default Projects;

