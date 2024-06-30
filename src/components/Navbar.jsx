const Navbar = () => {
  return (
    <nav className="p-4">

      <div className="container mx-auto">

        <div className="flex justify-between items-center">

          <div className="text-white font-bold text-xl">Duong Ha </div>

          <div className="hidden md:flex space-x-4 pr-20">

            <a href="https://www.linkedin.com/in/duong-ha-55524a246/" className="text-white hover:text-gray-300 px-4">Home</a>

            <a href="https://github.com/alexha11" className="text-white hover:text-gray-300 px-4">Resume</a>

            <a href="#" className="text-white hover:text-gray-300 px-4">Work</a>

            <a href="#" className="text-white hover:text-gray-300 px-4">Contact</a>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;