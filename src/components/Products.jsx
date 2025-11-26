import React from "react";
import img from "../assets/svg/phone.svg";
import img2 from "../assets/svg/camera.svg";
import img3 from "../assets/svg/notebook.svg";
import img4 from "../assets/svg/phones.svg";
import img5 from "../assets/svg/games.svg";
import img6 from "../assets/svg/watchs.svg";
import { useNavigate } from "react-router-dom";

const Products = ({ selectedCategory }) => {
  const navigate = useNavigate();
  
  const categories = [
    { img: img, name: "Accessories", category: "accessories" },
    { img: img2, name: "Camera", category: "camera" },
    { img: img3, name: "Laptop", category: "laptop" },
    { img: img4, name: "Smart Phone", category: "smartphone" },
    { img: img5, name: "Gaming", category: "gaming" },
    { img: img6, name: "Smart Watch", category: "smartwatch" }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/product/${category}`);
  };

  return (
    <section className="container">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            onClick={() => handleCategoryClick(category.category)}
            key={index}
            className="bg-white rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer min-h-[180px]"
            style={{
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center justify-center mb-3 h-16 w-16">
              <img 
                src={category.img} 
                alt={category.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="font-Inter font-light text-base leading-[150%] text-center text-[#2d2d2d] mt-2">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;