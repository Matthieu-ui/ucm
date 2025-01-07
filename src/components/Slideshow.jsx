import React, { useState, useEffect } from 'react';

const slides = [
  { image: '/src/assets/header-default.jpg', title: 'With over 35 years of experience', description: '' },
  { image: '/src/assets/masthead-wood-stack.jpg', title: '', description: '' },
  { image: '/src/assets/pacific-northwest.jpg', title: "", description: '' },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-md">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity ease-in-out duration-700 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-left p-6 text-white ">
            <div className="text-left  w-1/2">
              <h2 className="text-xl font-bold">With over 35 years of experience</h2>
              <p className="text-md"> Uresco is a trusted supplier of top-quality building materials
                 throughout the Pacific Northwest and Alaska. Serving residential, commercial,
                  and institutional builders, Uresco offers excellent pricing, selection, and dependable delivery to any job site.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
