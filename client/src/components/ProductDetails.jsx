import React, { useState } from "react";

const variants = [
  {
    color: "Black",
    img: "https://images.meesho.com/images/products/446343801/2qswx_512.webp",
  },
  {
    color: "Brown",
    img: "https://images.meesho.com/images/products/490425948/qgdlw_512.webp",
  },
  {
    color: "Beige",
    img: "https://images.meesho.com/images/products/513997973/u3nae_512.webp",
  },
];

const sizes = ["Full Set", "10 kg", "25 kg", "35 kg"];

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(variants[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex justify-center items-center">
      <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
        <div className="flex items-center justify-between gap-6 mb-6">
          <div className="text">
            <h2 className="font-manrope text-start font-bold text-3xl leading-10 text-gray-900 mb-2">
              {selectedColor.color} Summer Travel Bag
            </h2>
            <p className="font-normal text-start text-base text-gray-500">
              ABS LUGGAGE
            </p>
          </div>
        </div>

        <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
          <div className="flex items-center">
            <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900">
              $ 199.00{" "}
            </h5>
            <span className="ml-3 font-semibold text-lg text-indigo-600">
              30% off
            </span>
          </div>
        </div>

        <p className="font-medium text-lg text-start text-gray-900 mb-2">
          Color
        </p>
        <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
          {variants.map((variant, idx) => (
            <div
              key={idx}
              className={`color-box group cursor-pointer rounded-xl`}
              onClick={() => setSelectedColor(variant)}
            >
              <img
                src={variant.img}
                alt={`Travel Bag ${variant.color}`}
                className={`h-[100px] ${
                selectedColor.color === variant.color
                  ? "ring-2 ring-indigo-500"
                  : ""
              } w-full aspect-square border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-indigo-600 object-cover`}
              />
              <p
                className={`font-normal text-sm leading-6 text-center mt-2 ${
                  selectedColor.color === variant.color
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {variant.color}
              </p>
            </div>
          ))}
        </div>

        <p className="font-medium text-lg text-start text-gray-900 mb-2">
          Size (KG)
        </p>
        <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-8">
          {sizes.map((size, idx) => (
            <button
              key={idx}
              className={`border whitespace-nowrap text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm transition-all duration-300 ${
                selectedSize === size
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "text-gray-900 border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-8">
          <div className="flex items-center justify-center border border-gray-400 rounded-full">
            <button
              onClick={decreaseQty}
              className="group py-[14px] px-3 border-r border-gray-400 rounded-l-full bg-white hover:bg-gray-50"
            >
              –
            </button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="text-lg font-semibold text-gray-900 px-2 w-full min-w-[75px] text-center bg-transparent outline-none"
            />
            <button
              onClick={increaseQty}
              className="group py-[14px] px-3 border-l border-gray-400 rounded-r-full bg-white hover:bg-gray-50"
            >
              +
            </button>
          </div>

          <button className="group py-3 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm hover:bg-indigo-100">
            Add to cart
          </button>
        </div>

        <button className="w-full px-5 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg shadow-sm hover:bg-indigo-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
