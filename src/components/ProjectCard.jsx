import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >
              <FaGithub className="mr-1" /> Code
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
            >
              <FaExternalLinkAlt className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

// Example usage:
// <ProjectCard project={{
//   title: "Project Name",
//   description: "Brief description of the project",
//   image: "/path/to/image.jpg",
//   technologies: ["React", "Tailwind", "Node.js"],
//   githubUrl: "https://github.com/yourusername/project",
//   liveUrl: "https://project-demo.com"
// }} />