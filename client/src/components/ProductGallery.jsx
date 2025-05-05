"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProductGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-4"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Main Image Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="rounded-2xl mb-4"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <motion.img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="rounded-2xl w-full max-h-[400px] p-5 object-cover object-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <motion.img
                src={src}
                alt={`Thumb ${idx + 1}`}
                className="cursor-pointer m-2 rounded-xl border-2 border-transparent hover:border-indigo-600 w-full h-24 object-cover object-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default ProductGallery;
