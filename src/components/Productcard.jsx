import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCards = ({ selectedCategory }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6905b069ee3d0d14c13361c0.mockapi.io/product`)
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        {selectedCategory
          ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`
          : "All Products"}
        <span className="text-gray-500 text-lg ml-2">
          ({filteredProducts.length} Products)
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
          >
            <Link to={`/product-detail/${encodeURIComponent(product.title)}`}>
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src={product.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt=""
                />
              </div>
            </Link>

            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>

              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-blue-600">
                    {product.price.toLocaleString("uz-UZ")} so'm
                </span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-500">4.5</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCards;
