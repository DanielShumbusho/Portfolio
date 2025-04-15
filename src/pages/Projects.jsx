import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const Allprojects = [
    {
        title: "Portfolio Website",
        description: "A responsive portfolio built with React and Tailwind CSS",
        image: "/Portfolio/assets/images/React_Logo.png",
        technologies: ["React", "Vite", "Tailwind"],
        githubUrl: "https://github.com/DanielShumbusho/Portfolio.git",
      },
    {
        title: "Expense Tracker API",
        description: "An expense tracking api for daily errands",
        image: "/Portfolio/assets/images/spring-boot-logo.png",
        technologies: ["Java", "PostgresSQL"],
        githubUrl: "https://github.com/DanielShumbusho/ExpenseTrackerApi",
    }
    // Add more projects as needed
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {Allprojects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
