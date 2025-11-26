import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { CiHeart, CiShoppingBasket, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: "Blog", path: "/Ourblog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b py-3 border-b-blue-300 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink to="/">
          <img src={logo} alt="Tech Heim Logo" className="h-10" />
        </NavLink>
        <nav className="hidden md:flex items-center gap-5">
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `font-Inter font-light text-base transition-colors duration-200 hover:text-[#063A88] ${
                  isActive ? "text-[#063A88] font-medium" : "text-[#0c0c0c]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4 text-2xl">
          <CiHeart className="text-[#063A88] cursor-pointer hover:scale-110 transition-transform" />
          <CiShoppingBasket className="cursor-pointer hover:scale-110 transition-transform" />
          <CiUser className="cursor-pointer hover:scale-110 transition-transform" />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <HiOutlineMenuAlt3
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-6">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Tech Heim Logo" className="h-10" />
            </NavLink>
            <HiX
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <nav className="flex flex-col gap-6">
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-xl font-medium transition-colors duration-200 hover:text-[#063A88] ${
                    isActive ? "text-[#063A88]" : "text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-6 text-3xl mt-10">
            <CiHeart className="text-[#063A88] cursor-pointer hover:scale-110 transition-transform" />
            <CiShoppingBasket className="cursor-pointer hover:scale-110 transition-transform" />
            <CiUser className="cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
