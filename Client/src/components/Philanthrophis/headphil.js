import { Link } from "react-router-dom";
const Headphil=()=>{
    return(
        <nav className="bg-white md:py-10">
          <div className="container px-8 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <Link to="/" className="font-bold text-3xl text-indigo-600">
                NGO CONNECT
              </Link>
            </div>
            <div 
              className="hidden text-lg md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <a
                href="/philPropile"
                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
              >
                Profile
              </a>
              <Link
                to="/search"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Search
              </Link>
              <Link
                to="/video"
                className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
              >
                Video Chat
              </Link>
              <Link
                to="/"
                className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Log out
              </Link>
            </div>
          </div>
        </nav>
    )
}

export default Headphil;