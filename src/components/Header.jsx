const Header = () => {
    return (
      <>
      <header className="py-20 text-center">
      <div className="flex flex-wrap gap-4 justify-center items-center">
          <img width="350" data-iframe-height="370" src="/assets/images/Portfolio_Picture(Final).jpg"></img>
      </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Daniel SHUMBUSHO</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A passionate developer specializing in modern web technologies.
        </p>
      </header>
      </>
      
    )
  }
  
  export default Header