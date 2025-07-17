import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  const images = ["/heroslider.jpg", "/heroslider2.jpg"];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-[753px] bg-cover bg-[center_right_47%] flex flex-col justify-center items-center text-white font-montserrat transition-all duration-500"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      {/* Slider Content */}
      <div className="text-center">
        <p className="mb-6">SUMMER 2020</p>
        <p className="text-[40px] font-bold">NEW</p>
        <p className="text-[40px] font-bold mb-6">COLLECTION</p>
        <p className="text-[20px]">We know how large objects</p>
        <p className="text-[20px]">will act, but things on a</p>
        <p className="text-[20px] mb-10">small scale</p>
        <button className="rounded-none bg-green-500 px-6 py-3">SHOP NOW</button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft color="white" size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight color="white" size={28} />
      </button>
    </div>
  );
}
