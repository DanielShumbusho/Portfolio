import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SkillItem from '../components/SkillItem'


const Home = () => {
  // Featured projects data
  const featuredProjects = [
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
      technologies: ["Java", "Spring-Boot", "PostgresSQL"],
      githubUrl: "https://github.com/DanielShumbusho/ExpenseTrackerApi",
    }
  ]

  // Top skills data
  const FrontSkills = [
    { name: "React", level: 50 },
    { name: "JavaScript", level: 40 },
    { name: "CSS", level: 50 },
    { name: "Tailwind CSS", level: 40 },
  ]

  const BackSkills = [
    { name: "Java", level: 70 },
    { name: "Spring-Boot", level: 60 },
    { name: "PostgreSQL", level: 70 }
  ]

  return (
    <div className="space-y-16">
      <header className="py-20 text-center">
        {/* Picture */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
          <img width="250" 
          data-iframe-height="270" 
          src="/Portfolio/assets/images/Portfolio_Picture(Final).jpg" 
          className="rounded-full w-[250px] h-[250px] object-cover border-4 border-blue-500 shadow-lg"></img>
      </div><br></br>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Daniel SHUMBUSHO UMUTONI</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A passionate developer specializing in modern web technologies.
        </p><br></br>
        <Link 
              to="/about" 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              About me
        </Link>

      </header>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-10 dark:opacity-20 rounded-3xl -rotate-5 scale-105"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            I build exceptional digital experiences with modern web technologies. 
            I specialize in building web applications that are not only functional but also visually appealing. 
            My goal is to create user-friendly interfaces that enhance the overall user experience.
          </p>
          {/* <div className="flex flex-wrap gap-4 justify-center items-center">
          <img width="250" data-iframe-height="270" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/134270955" alt="Certificate Image"></img>
          <a href='https://www.credly.com/badges/4dcd6161-a5f2-4e81-a564-d4bd4399ec8e/public_url'><img width="250" data-iframe-height="270" src="/assets/images/networking-basics.png"/></a>
          </div> */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              View My Work
            </Link>
            {/* <Link 
              to="/contact" 
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Contact Me
            </Link> */}
          </div> 
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 ">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          Some of my recent work that I'm particularly proud of
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/projects" 
            className="inline-block px-6 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <h2 className="text-3xl font-bold mb-2 text-white">My Expertise</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          Technologies I work with most frequently
        </p>
        <h2 className="text-3xl font-bold mb-2 text-white">FrontEnd</h2><br></br>
        <div className="grid md:grid-cols-3 gap-8 text-white">
          {FrontSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill.name} level={skill.level} />
          ))}
        </div><br></br>
        <h2 className="text-3xl font-bold mb-2 text-white">BackEnd</h2><br></br>
        <div className="grid md:grid-cols-3 gap-8 text-white">
          {BackSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
