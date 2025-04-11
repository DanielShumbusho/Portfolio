const SkillItem = ({ skill, level }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{skill}</span>
          <span className="text-gray-600 dark:text-gray-400">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-blue-500 h-2.5 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    )
  }
  
  export default SkillItem
  
  // Example usage:
  // <SkillItem skill="React" level={15} />
  // <SkillItem skill="JavaScript" level={10} />
  // <SkillItem skill="CSS/Tailwind" level={10} />