// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { fetchArticleSearch } from "../features/article/articleSlice";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo1 from "../assets/icons/logo-1.png";

const Navbar = () => {
  const location = useLocation().pathname;
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  useEffect(() => {
    if (hamburger) {
      window.addEventListener("click", function (e) {
        if (e.target !== hamburger && e.target !== navMenu) {
          hamburger.classList.remove("hamburger-active");
          navMenu.classList.add("hidden");
        }
      });
    }
    console.log(("Y:", window.pageYOffset));
  });

  const hamburgerCLick = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    // Hamburger
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <header className="bg-white bg-opacity-50 fixed top-0 left-0 w-full flex items-center z-10 " style={{ backdropFilter: `blur(5px)` }}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            {location === "/" ? (
              <a href="#home" className="font-bold text-lg text-primary block py-3 lg:py-3">
                <img src={logo1} alt="" className="w-10 lg:w-16" />
              </a>
            ) : (
              <NavLink to="/" onClick={topFunction} className="font-bold text-lg text-primary block py-3 lg:py-3">
                <img src={logo1} alt="" className="w-10 lg:w-16" />
              </NavLink>
            )}
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" onClick={hamburgerCLick} className="block absolute right-4 lg:hidden">
              <span className="hamburger-line origin-top-left transition duration-300"></span>
              <span className="hamburger-line transition duration-300"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300"></span>
            </button>

            <nav id="nav-menu" className="hidden absolute py-5 lg:py-2 bg-white shadow-lg text-primary rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <div className="block lg:flex lg:items-center">
                <ul className="block lg:flex lg:justify-center lg:items-center">
                  <li className="group lg:flex">
                    {location === "/" ? (
                      <a href="#home" className="text-base py-2 mx-6 font-quicksand font-semibold group-hover:text-secondary">
                        Home
                        <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-500  bg-secondary"></span>
                      </a>
                    ) : (
                      <NavLink to="/" className="text-base py-2 mx-6 font-quicksand font-semibold group-hover:text-secondary">
                        Home
                        <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-500  bg-secondary"></span>
                      </NavLink>
                    )}
                  </li>
                  <li className="group lg:flex">
                    {location === "/" ? (
                      <a href="#category" className="text-base py-2 mx-6 font-quicksand font-semibold group-hover:text-secondary">
                        Category
                        <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-500  bg-secondary"></span>
                      </a>
                    ) : (
                      <NavLink to="/#category" onClick={() => window.scrollTo(0, 792)} className="text-base py-2 mx-6 font-quicksand font-semibold group-hover:text-secondary">
                        Category
                        <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-500  bg-secondary"></span>
                      </NavLink>
                    )}
                  </li>
                  <li className="group lg:flex">
                    <a href="#a" className="bg-blueButton shadow-md rounded-full text-primaryLight text-base py-1 px-6 mx-6 font-quicksand font-semibold group-hover:brightness-110">
                      Login
                    </a>
                  </li>
                </ul>
                {/* <form onSubmit={handleSubmit} className="mx-6 flex">
                  <input type="text" onChange={searchChange} className="text-base border border-primary border-opacity-50 rounded-lg mr-3 px-2 w-1/2" />
                  <button className="py-1 px-3 w-1/2 md:w-1/3 bg-primary rounded-lg text-secondary transition duration-200 hover:opacity-80">Search</button>
                </form> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
