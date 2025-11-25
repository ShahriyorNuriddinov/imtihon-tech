import React from "react";
import logo from "../assets/svg/logo.svg";

const Header = () => {
  const link = [
    { name: "Home" },
    { name: "Products" },
    { name: "Blog" },
    { name: "FAQ" },
    { name: "Contact Us" },
  ];

  return (
    <header className="container">
      <div className="flex items-center ">
        <div>
          <img src={logo} alt="logo" className="" />
        </div>

        <nav className="flex gap-4">
          {link.map((item, index) => (
            <p
              className="font-Inter font-light text-base text-[#0c0c0c]"
              key={index}
            >
              {item.name}
            </p>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
