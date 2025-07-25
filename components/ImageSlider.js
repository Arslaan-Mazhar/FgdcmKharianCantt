"use client"
// components/ImageSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// SwiperCore.use([Navigation, Pagination, Autoplay]);

const images = [
  { src: "/images/p1.jpeg", alt: "Image 1" },
  { src: "/images/p2.jpeg", alt: "Image 2", margin: "auto" },
  { src: "/images/p3.jpeg", alt: "Image 3" },
  { src: "/images/p4.jpeg", alt: "Image 4" },
  { src: "/images/p5.jpeg", alt: "Image 1" },
  { src: "/images/p6.jpeg", alt: "Image 2", margin: "auto" },
  { src: "/images/p7.jpeg", alt: "Image 3" },
  { src: "/images/p8.jpeg", alt: "Image 4" },
  { src: "/images/p9.jpeg", alt: "Image 1" },
  { src: "/images/p10.jpeg", alt: "Image 2", margin: "auto" },
  { src: "/images/p11.jpeg", alt: "Image 3" },
  { src: "/images/p12.jpeg", alt: "Image 4" },
  { src: "/images/p13.jpeg", alt: "Image 1" },
  { src: "/images/p14.jpeg", alt: "Image 2", margin: "auto" },
  { src: "/images/p15.jpeg", alt: "Image 3" },
  { src: "/images/p16.jpeg", alt: "Image 4" },
  { src: "/images/p17.jpeg", alt: "Image 1" },
  { src: "/images/p18.jpeg", alt: "Image 2", margin: "auto" },
];

const ImageSlider = () => {
  return (
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      style={{ width: '100%', maxWidth: 'auto', height: '100%', margin: '0 auto' }}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img.src}
            alt={img.alt}
            style={{
              width: '100%',
              height: '100%',
              ...(img.margin ? { margin: img.margin } : {})
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
