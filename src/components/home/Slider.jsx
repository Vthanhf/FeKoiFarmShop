import { useState, useEffect } from "react";
import arrows from "../../assets/arrows.svg";
import background from "../../assets/background-white.svg";

const slides = [
  {
    title: "",
    description: "",
    background: "bg-black",
    imageUrl: "https://play-lh.googleusercontent.com/_jj8EVlrpn-cp4DYZCWKmCty6DtLfkTPCTEPGt7HjNp2FjeaCRSGEbym9VFCbeksTDbp",
  },
  {
    title: "",
    description: "",
    background: "bg-cover bg-center",
    imageUrl: background,
  },
  {
    title: "",
    description: "",
    background: "bg-cover bg-center",
    imageUrl:
      "https://image.slidesdocs.com/responsive-images/background/a-stunning-3d-depiction-of-multicolored-koi-fish-showcasing-a-range-of-intricate-designs-powerpoint-background_78c650617b__960_540.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = !isHovered && setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`flex flex-col items-center justify-center min-w-full h-[700px] ${slide.background}`}
            key={index}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
            }}
          >
            <div className="text-white font-bold text-3xl z-10 relative">
              {slide.title}
            </div>
            {slide.description && (
              <div className="text-white font-semibold text-lg z-10 relative mt-2">
                {slide.description}
              </div>
            )}
          </div>
        ))}
      </div>
      <img
        src={arrows}
        alt="Previous Slide"
        className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer"
        onClick={prevSlide}
        aria-label="Previous Slide"
      />
      <img
        src={arrows}
        alt="Next Slide"
        className="absolute scale-x-[-1] top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
        onClick={nextSlide}
        aria-label="Next Slide"
      />
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
