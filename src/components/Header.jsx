
import React from "react";
import logo from "../assets/svg/logo.svg";
import { CiHeart, CiShoppingBasket, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Header = () => {
  const link = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" }, 
    { name: "Blog", path: "/Ourblog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b py-3 border-solid border-b-blue-300 shadow-sm">
      <div className="flex items-center container mx-auto px-4 justify-between">
        <div className="">
          <NavLink to="/">
            <img src={logo} alt="Tech Heim Logo" />
          </NavLink>
        </div>
        <nav className="flex items-center gap-5">
          {link.map((item, index) => (
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
        <div className="flex items-center gap-4 text-2xl">
          <CiHeart className="text-[#063A88] cursor-pointer hover:scale-110 transition-transform" />
          <CiShoppingBasket className="cursor-pointer hover:scale-110 transition-transform" />
          <CiUser className="cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
    </header>
  );
};

export default Header;