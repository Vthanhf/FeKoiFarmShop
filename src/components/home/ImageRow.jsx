import rectangle31 from "../../assets/rectangle-31.svg";
import rectangle32 from "../../assets/rectangle-32.svg";
// import image from '../../assets/image.svg';

const ImageRow = () => {
  return (
    <div className="flex justify-center space-x-4 p-4 my-20 bg-white">
      <img
        src={rectangle31}
        alt="Rectangle 31"
        className="w-[430px] h-[160px]"
      />
      <img
        src={rectangle32}
        alt="Rectangle 32"
        className="w-[430px] h-[160px]"
      />
      <img src={rectangle32} alt="Image" className="w-[430px] h-[160px]" />
    </div>
  );
};

export default ImageRow;
