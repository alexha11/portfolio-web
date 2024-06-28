const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">

      <div className="container mx-auto">

        <div className="flex justify-between items-center">

          <div className="text-white font-bold text-xl">My Website</div>

          <div className="hidden md:flex space-x-4">

            <a href="#" className="text-white hover:text-gray-300">Linkedin</a>

            <a href="#" className="text-white hover:text-gray-300">Github</a>

            <a href="#" className="text-white hover:text-gray-300">Instagram</a>

            <a href="#" className="text-white hover:text-gray-300"></a>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;