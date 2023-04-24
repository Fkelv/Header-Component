import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDivOpen, setIsDivOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "/communities", title: "Our Communities", subMenu: { tittle: "", to: "commnuties/cadence" } },
    {
      to: "/about", title: "Who We Are"
    },
    {
      to: "/ContactUs", title: "Contact Us"
    },
  ]
  return (
    <>
      <header className="bg-[#f6faf3] border-b border-[#a2aa9c] px-8">
        <div className="container  flex items-center justify-between h-16 ">
          <div className="flex-shrink-0">
            <h1 className="text-[#23331b] text-2xl font-bold">Logo</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <NavLink

                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-4 py-5 border-[#23331b]"
                        : "text-[#23331b] hover:text-[#23331b] px-3 py-2 rounded-md text-sm font-medium"
                    }
                    onMouseEnter={() => {
                      if (item.subMenu) {
                        setIsDivOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.subMenu) {
                        setIsDivOpen(false);
                      }
                    }}
                  >
                    <span className="p-3 rounded-[5px] transition-colors duration-200 hover:bg-[#e6f3c5] active:bg-[#e6f3c5] &.active:bg-[#e6f3c5]">
                      {item.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden flex items-center px-2 ">
            <button onClick={toggleMenu} className="text-black hover:text-black focus:outline-none">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <nav>
            <ul className="px-2 pt-2 pb-3 space-y-1 bg-[#23331b] text-[#e6f3c5] h-screen ">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.to}
                    className=" block px-3 py-2 rounded-md text-base font-medium"

                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {isDivOpen && (
        <div className='bg-[#f6faf3] border-b border-[#a2aa9c] h-32 z-10 text-[#23331b] px-8 flex flex-col  justify-center'
          onMouseEnter={() => setIsDivOpen(true)}
          onMouseLeave={() => setIsDivOpen(false)}>
          <p className='font-medium mb-2'>South West</p>
          <ul>
            <li>
              <NavLink
                to="/community/"
                className="py-2 border-b-2 border-transparent hover:border-[#23331b]">
                cadence
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}