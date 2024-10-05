
const KoiSection = () => {
  return (
    <div className="relative w-full h-[495px] md:h-[400px]">
      <img 
        src="https://image.slidesdocs.com/responsive-images/background/a-stunning-3d-depiction-of-multicolored-koi-fish-showcasing-a-range-of-intricate-designs-powerpoint-background_78c650617b__960_540.jpg" 
        alt="Stunning depiction of multicolored Koi fish" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col md:flex-row justify-center w-full">
          <div className="w-1/2 md:pr-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6Vc1EpumwcU"
              title="Koi Karashi YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mx-auto max-w-full"
            ></iframe>
          </div>
          <div className="text-white w-1/2 md:pl-4 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Koi Karashi</h1>
            <p className="text-xl w-3/4">
              Koi Karashi, a type of Koi, has a uniform color of yellow ranging from bright yellow to deep yellow, very beautiful and fresh throughout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoiSection;
