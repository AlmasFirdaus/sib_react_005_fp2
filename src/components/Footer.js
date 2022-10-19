import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icons/icon-images/logo-1.png";

const Footer = () => {
  const location = useLocation().pathname;
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <footer className="bg-zinc-100 pt-24 pb-12 border-t-2">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full px-4 font-medium text-primary md:w-1/3">
              <img src={logo} alt="" className="w-[10rem] lg:w-28 mb-4 brightness-150 hover:animate-pulse" />
              <h3 className="mb-2 text-3xl lg:text-2xl font-bold">RCTN-KS05</h3>
              <p className="text-lg">Jember - Indonesia</p>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-primary">Resource</h3>
              <ul className="text-primary flex flex-col">
                <li>
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    ReactJS
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    TailwindCSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/revinarahmadilla"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1"
                  >
                    Logo Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-primary">Navigation</h3>
              <ul className="text-primary">
                <li>
                  {location === "/" ? (
                    <a href="#home" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Home
                    </a>
                  ) : (
                    <Link to="/" onClick={topFunction} className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Home
                    </Link>
                  )}
                </li>
                <li>
                  <a href="#category" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    Category
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
