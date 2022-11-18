import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/icons/icon-images/logo-1.png";
import kodeId from "../../../assets/images/kode-hactive.png"

const Footer = () => {
  const location = useLocation().pathname;
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <footer className="bg-zinc-100 pt-24 pb-12 border-t-2 ">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full px-4 font-medium text-primary md:w-1/3 [&>p]:mt-1">
              <img src={logo} alt="" className="w-[10rem] lg:w-28 mb-4 brightness-150 hover:animate-pulse" />
              <h3 className="mb-2 text-3xl lg:text-2xl font-bold">RCTN-KS05</h3>
              <p>R. Fasich Aulia - 013</p>
              <p>Almas Firdaus - 017</p>
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
                  <a href="https://fakestoreapi.com/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                    Fake Store API
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
                <li>
                  <a href="https://www.kode.id" target="_blank"
                    rel="noreferrer noopener"><img src={kodeId} alt="kode.id" className="hover:w-28" width={100}/></a>
                </li>
              </ul>
            </div>
            <div className="mb-12 w-full px-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-semibold text-primary">Navigation</h3>
              <ul className="text-primary">
                <li>
                  {location === "/admin" ? (
                    <a href="#product" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Product
                    </a>
                  ) : (
                    <Link to="/admin" onClick={topFunction} className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Product
                    </Link>
                  )}
                </li>
                <li>
                  {location === "/admin/sales-recap" ? (
                    <a href="#sales-recap" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Sales Recap
                    </a>
                  ) : (
                    <Link to="/admin/sales-recap" onClick={topFunction} className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      Sales Recap
                    </Link>
                  )}
                </li>
                <li>
                  {location === "/admin/about" ? (
                    <a href="#about" className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      About
                    </a>
                  ) : (
                    <Link to="/admin/about" onClick={topFunction} className="mb-3 inline-block text-lg hover:text-secondary transition duration-300 ease-in-out hover:before:content-['>'] hover:before:mr-1">
                      About
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full border-t border-primary pt-10">
            <p className="text-center text-xs font-medium text-slate-500">
              Dibuat dengan <span className="text-pink-500">❤️</span> oleh RCTN-KS05-KEL07
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
