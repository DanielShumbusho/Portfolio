import { NavLink } from 'react-router-dom'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold dark:text-white">
          Daniel's <span className="text-blue-500">Portfolio</span>
        </NavLink>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'hover:text-blue-500 transition'}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'hover:text-blue-500 transition'}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'hover:text-blue-500 transition'}>Projects</NavLink>
            {/* <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500 font-medium' : 'hover:text-blue-500 transition'}>Contact</NavLink> */}
          </div>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar