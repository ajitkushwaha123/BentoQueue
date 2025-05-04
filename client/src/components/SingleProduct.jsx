import React from "react";

const SingleProduct = ({ product }) => {
//   const product = {
//     image: "https://example.com/images/bento1.jpg", // Replace with your actual image
//     title: "Classic 3-Tier Bento Lunchbox",
//     price: 699,
//     rating: 5,
//     reviews: 112,
//     description:
//       "This stylish and stackable 3-tier bento lunchbox is perfect for packing a healthy and organized meal. Made from BPA-free material, it's leak-proof, microwave-safe, and dishwasher-friendly. Ideal for work, school, or picnics.",
//     features: [
//       "Three stackable compartments",
//       "Leak-proof and BPA-free",
//       "Microwave and dishwasher safe",
//       "Modern, minimalist design",
//     ],
//   };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 md:flex md:items-center md:gap-12">
        {/* Image */}
        <div className="mb-6 w-full md:mb-0 md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl shadow-md w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-5 w-5 ${
                  index < product.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.223 3.775a1 1 0 00.95.69h3.978c.969 0 1.371 1.24.588 1.81l-3.22 2.34a1 1 0 00-.364 1.118l1.223 3.775c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.22 2.34c-.785.57-1.84-.197-1.54-1.118l1.223-3.775a1 1 0 00-.364-1.118L2.879 9.202c-.783-.57-.38-1.81.588-1.81h3.978a1 1 0 00.95-.69l1.223-3.775z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {product.reviews} reviews
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-green-600 mt-4 mb-2">
            ₹{product.price.toLocaleString()}
          </p>

          {/* Description */}
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Features */}
          <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-6">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Add to Cart */}
          <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
