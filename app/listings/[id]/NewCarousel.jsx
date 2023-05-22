import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const NewCarousel = ({ children, ...options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [showPrevArrow, setShowPrevArrow] = useState(true);
  const [showNextArrow, setShowNextArrow] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    emblaApi.scrollTo(index);
  };

  const onScroll = (event) => {
    setShowPrevArrow(emblaApi.canScrollPrev());
    setShowNextArrow(emblaApi.canScrollNext());
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className="carousel-container">
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">{children}</div>
        {showPrevArrow && (
          <button
            className="arrow next absolute top-1/2 left-2"
            onClick={() => emblaApi.scrollPrev()}
          >

            <div className="p-1 bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024"><g transform="rotate(180 512 512)"><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z" /></g></svg>
            </div>
          </button>
        )}
        {showNextArrow && (
          <button
            className="arrow next absolute top-1/2 right-2"
            onClick={() => emblaApi.scrollNext()}
          >
            <div className="p-1 bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024"><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z" /></svg>
            </div>
          </button>
        )}



      </div>

      <div className="dots flex justify-center mt-4">
        {children.map((_, index) => (
          <button
            key={index}
            className={`dot w-3 h-3 rounded-full mx-1 ${
              index === selectedIndex ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => handleSelect(index)}
          > 
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewCarousel;
