import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
  const { title } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    axios
      .get("https://6905b069ee3d0d14c13361c0.mockapi.io/product")
      .then((res) => {
        const found = res.data.find(
          (item) =>
            item.title.toLowerCase() ===
            decodeURIComponent(title).toLowerCase()
        );
        setProduct(found);
        setMainImage(found?.img);
      });
  }, [title]);

  if (!product)
    return (
      <div className="text-center py-16 text-2xl text-gray-500">
        Product Not Fou
      </div>
    );

  return (
    <div className="container mx-auto px-6 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex md:flex-col gap-4">
            {[product.img, product.img2, product.img3]
              .filter(Boolean)
              .map((imgUrl, idx) => (
                <img
                  key={idx}
                  src={imgUrl}
                  onClick={() => setMainImage(imgUrl)}
                  className={`w-20 h-20 rounded-lg object-cover cursor-pointer border transition-all 
                  ${
                    mainImage === imgUrl
                      ? "border-blue-600 shadow-md"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                  alt=""
                />
              ))}
          </div>

          <div className="flex-1">
            <div className="w-full h-[380px] md:h-[420px] bg-gray-100 rounded-xl overflow-hidden shadow-sm">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-3 w-fit">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold mb-4 leading-snug text-gray-900">
            {product.title}
          </h1>

          <p className="text-3xl font-semibold text-blue-600 mb-6">
              {product.price.toLocaleString("uz-UZ")} so'm
          </p>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-500 text-xl">★</span>
            <p className="text-gray-600 text-lg">4.5 (128 reviews)</p>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            {product.description ||
              "This product is made with premium materials and built for quality, durability, and everyday comfort."}
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-lg shadow-md transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
