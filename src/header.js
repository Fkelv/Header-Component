import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#f6faf3]">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <h1 className="text-[#23331b] text-xl font-bold">Logo</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="text-[#23331b]"
                className="text-[#23331b] hover:text-[#23331b] px-3 py-2 rounded-md text-sm font-medium"
              >
                Our Communities
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                activeClassName="text-[#23331b]"
                className="text-[#23331b] hover:text-[#23331b] px-3 py-2 rounded-md text-sm font-medium"
              >
                Who We Are
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                activeClassName="text-[#23331b]"
                className="text-[#23331b] hover:text-[#23331b] px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#23331b] hover:text-[#23331b] focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={isMenuOpen ? 'hidden' : 'block'}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
              <path
                className={isMenuOpen ? 'block' : 'hidden'}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.75 5.75h18.5v2H2.75v-2zm0 5h18.5v2H2.75v-2zm0 5h18.5v2H2.75v-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <nav>
          <ul className="px-2 pt-2 pb-3 space-y-1">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="text-[#23331b]"
                className="text-[#23331b] hover:text-[#23331b] block px-3 py-2 rounded-md text-base font-medium"
              >
                Our Communities

              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                activeClassName="text-[#23331b]"
                className="text-[#23331b] hover:text-[#23331b] block px-3 py-2 rounded-md text-base font-medium"
              >
                Who We Are

              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                to="/about"
                activeClassName="text-[#23331b]"
                className="text-[#23331b] hover:text-[#23331b] block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us

              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
