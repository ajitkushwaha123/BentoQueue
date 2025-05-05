"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";

const SingleProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://images.meesho.com/images/products/470488823/tfrvc_512.webp",
    "https://images.meesho.com/images/products/440015209/znnzj_512.webp",
    "https://images.meesho.com/images/products/440015209/qwtbo_512.webp",
    "https://images.meesho.com/images/products/440015209/o5kfd_512.webp",
    "https://pagedone.io/asset/uploads/1711622437.png",
  ];

  const thumbs = [
    "https://pagedone.io/asset/uploads/1700472379.png",
    "https://pagedone.io/asset/uploads/1700472430.png",
    "https://pagedone.io/asset/uploads/1700472416.png",
    "https://pagedone.io/asset/uploads/1700472446.png",
    "https://pagedone.io/asset/uploads/1700472467.png",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div className="w-full">
            <ProductGallery images={images} />
          </div>

          <div className="w-full">
            <ProductDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
