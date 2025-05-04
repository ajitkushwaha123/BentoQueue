import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, price, rating, description }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-md">
      <div className="h-56 w-full">
        <a href="#">
          <img className="mx-auto h-full" src={image} alt={title} />
          <img className="mx-auto hidden h-full" src={image} alt={title} />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Up to 35% off
          </span>
          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
            >
              <span className="sr-only">Quick look</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
            >
              <span className="sr-only">Add to Favorites</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full text-start">
          <a
            href="#"
            className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
          >
            {title}
          </a>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-4 w-4 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            ))}
          </div>
          <p className="text-sm font-medium text-gray-900">{rating}</p>
          <p className="text-sm font-medium text-gray-500">(455)</p>
        </div>
        {/* <p className="mt-2 text-start text-sm text-gray-500">{description}</p> */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900">
            ₹{price}
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: "1",
      image:
        "https://m.media-amazon.com/images/I/41Eb2Jd2bML._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Classic 3-Tier Bento Lunchbox",
      price: 699,
      rating: 5,
      description:
        "Stylish and compact lunchbox with 3 stackable compartments — perfect for portion control and balanced meals.",
    },
    {
      id: "2",
      image:
        "https://m.media-amazon.com/images/I/3105r5hY7jL._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Leak-Proof Bento Box with Cutlery",
      price: 849,
      rating: 4,
      description:
        "Includes stainless steel cutlery and a leak-proof seal. Ideal for work, school, or travel.",
    },
    {
      id: "3",
      image:
        "https://m.media-amazon.com/images/I/31WbdmH9DEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Eco-Friendly Bamboo Bento Set",
      price: 999,
      rating: 4,
      description:
        "Made with natural bamboo fiber. Reusable, durable, and perfect for eco-conscious lifestyles.",
    },
    {
      id: "4",
      image: "https://m.media-amazon.com/images/I/51NT6fineyL.jpg",
      title: "Microwave-Safe Bento Box (2 Compartments)",
      price: 579,
      rating: 3,
      description:
        "Simple and functional bento box safe for microwave use. Ideal for quick and healthy meals.",
    },
    {
      id: "5",
      image:
        "https://m.media-amazon.com/images/I/41upmGxrCWL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Thermal Insulated Bento Lunchbox",
      price: 1299,
      rating: 5,
      description:
        "Keeps your food hot or cold for hours. Great for outdoor lunches and picnics.",
    },
    {
      id: "6",
      image: "https://m.media-amazon.com/images/I/61Mm-667QcL._SX679_.jpg",
      title: "Kids’ Animal-Themed Bento Box",
      price: 499,
      rating: 4,
      description:
        "Bright, fun, and easy to open — designed especially for little hands and picky eaters.",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <div onClick={() => navigate(`/product-detail/${id}`)}>
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
                description={product.description}
              />
            </div>
          ))}
        </div>
        <div className="w-full text-center">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
