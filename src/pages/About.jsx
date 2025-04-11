import SkillItem from '../components/SkillItem'

const About = () => {
  const skills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "CSS/Tailwind", level: 80 },
    { name: "Java", level: 70 },
    { name: "Spring-Boot", level: 60 },
    { name: "PostgreSQL", level: 70 }
  ]

  return (
    <section className="grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-400">About Me</h2>
        <p className="mb-4">
          I'm a passionate developer with 3 years of experience building web applications. 
          I specialize in creating responsive, user-friendly interfaces with React.
        </p>
        <p>
          Having a highschool diploma in arts and currently pursuing a degree in IT 
          at the Adventist University of Central Africa(AUCA) I have 
          a strong foundation in both design and technology. 
          I love to explore new discoveries especially in artificial intelligence.
          Therefore when I'm not coding I enjoy reading and learning about the latest trends in technology and design.
        </p>
      </div>
      
      {/* <div>
        <h3 className="text-2xl font-bold mb-6">My Skills</h3>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill.name} level={skill.level} />
        ))}
      </div> */}
      
    </section>
  )
}

export default About